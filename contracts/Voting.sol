// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IMembership {
    function isMember(address member) external view returns (bool);
    function numberOfMembers() external view returns (uint256);
}

contract Voting is ERC20 {

    enum Vote {
        DENY,
        LOW,
        MEDIUM,
        HIGH
    }

    struct Labour {
        address creator;
        uint96 startTime;
        string content;
        uint64 denyCount;
        uint64 lowCount;
        uint64 mediumCount;
        uint64 highCount;
    }

    uint256 constant VOTING_LENGTH = 604_800; //1 week
    uint256 constant LOW_MINT = 3;
    uint256 constant MEDIUM_MINT = 5;
    uint256 constant HIGH_MINT = 8;

    uint256 private _labourId;

    IMembership membership;

    mapping(uint256 => Labour) IdToLabour;

    constructor(string memory name, string memory symbol, address _membershipAddress) ERC20(name, symbol) {
        membership = IMembership(_membershipAddress);
    }

    modifier onlyMember() {
        require(membership.isMember(msg.sender), "only members");
        _;
    }

    function startVote(string calldata content) external onlyMember {
        Labour memory labour = Labour(
            msg.sender,
            uint96(block.timestamp),
            content,
            0,
            0,
            0,
            0
        );

        IdToLabour[_labourId] = labour;
        unchecked { _labourId++; }
    }

    function settleVote(uint256 labourId) external onlyMember {
        Labour memory labour = IdToLabour[labourId];
        Vote winningVote = calculateWinningVote(labour);

        if (winningVote == Vote.LOW) {
            _mint(labour.creator, LOW_MINT);
        } else if (winningVote == Vote.MEDIUM) {
            _mint(labour.creator, MEDIUM_MINT);
        } else if (winningVote == Vote.HIGH) {
            _mint(labour.creator, HIGH_MINT);
        }
    }

    function vote() external onlyMember {}

    function calculateWinningVote(Labour memory labour) internal pure returns (Vote) {
        uint256 totalYes = labour.lowCount + labour.mediumCount + labour.highCount;
        if (labour.denyCount >= totalYes) {
            return Vote.DENY;
        }

        if (labour.lowCount >= labour.mediumCount && labour.lowCount >= labour.highCount) {
            return Vote.LOW;
        } else if (labour.mediumCount > labour.lowCount && labour.mediumCount >= labour.highCount) {
            return Vote.MEDIUM;
        } else {
            return Vote.HIGH;
        }
    }

}