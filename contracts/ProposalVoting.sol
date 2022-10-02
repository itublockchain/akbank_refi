// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IMembership {
    function isMember(address member) external view returns (bool);
    function numberOfMembers() external view returns (uint256);
}

contract ProposalVoting is ERC20 {

    enum Vote {
        DENY,
        LOW,
        MEDIUM,
        HIGH
    }

    struct Proposal {
        address creator;
        uint88 startTime;
        bool settled;
        string content;
        string name;
        uint64 denyCount;
        uint64 lowCount;
        uint64 mediumCount;
        uint64 highCount;
    }

    uint256 constant VOTING_LENGTH = 604_800; //1 week
    uint256 constant LOW_MINT = 3;
    uint256 constant MEDIUM_MINT = 5;
    uint256 constant HIGH_MINT = 8;

    uint256 private _proposalId;

    IMembership membership;

    mapping(uint256 => Proposal) public idToProposal;
    mapping(address => mapping(uint256 => bool)) public voted;

    constructor(string memory name, string memory symbol, address _membershipAddress) ERC20(name, symbol) {
        membership = IMembership(_membershipAddress);
    }

    modifier onlyMember() {
        require(membership.isMember(msg.sender), "only members");
        _;
    }

    function startVote(string calldata content, string calldata _name) external onlyMember {
        Proposal memory proposal = Proposal(
            msg.sender,
            uint88(block.timestamp),
            false,
            content,
            _name,
            0,
            0,
            0,
            0
        );

        idToProposal[_proposalId] = proposal;
        unchecked { _proposalId++; }
    }

    function settleVote(uint256 proposalId) external onlyMember {
        Proposal memory proposal = idToProposal[proposalId];
        require(proposal.startTime + VOTING_LENGTH >= block.timestamp, "voting in progress");
        require(!proposal.settled, "voting already settled");
        Vote winningVote = calculateWinningVote(proposal);

        if (winningVote == Vote.LOW) {
            _mint(proposal.creator, LOW_MINT);
        } else if (winningVote == Vote.MEDIUM) {
            _mint(proposal.creator, MEDIUM_MINT);
        } else if (winningVote == Vote.HIGH) {
            _mint(proposal.creator, HIGH_MINT);
        }

        idToProposal[proposalId].settled = true;
    }

    function useVote(uint256 proposalId, Vote vote) external onlyMember {
        Proposal storage proposal = idToProposal[proposalId];
        require(!voted[msg.sender][proposalId], "already voted");
        if (vote == Vote.DENY) {
            unchecked { proposal.denyCount++; }
        } else if (vote == Vote.LOW) {
            unchecked { proposal.lowCount++; }
        } else if (vote == Vote.MEDIUM) {
            unchecked { proposal.mediumCount++; }
        } else if (vote == Vote.HIGH) {
            unchecked { proposal.highCount++; }
        }

        voted[msg.sender][proposalId] = true;
    }

    function calculateWinningVote(Proposal memory proposal) internal view returns (Vote) {
        uint256 totalYes = proposal.lowCount + proposal.mediumCount + proposal.highCount;
        uint256 totalVote = totalYes + proposal.denyCount;
        uint256 totalMember = membership.numberOfMembers();

        if (proposal.denyCount >= totalYes || (totalVote * 2) < totalMember) {
            return Vote.DENY;
        }

        if (proposal.lowCount >= proposal.mediumCount && proposal.lowCount >= proposal.highCount) {
            return Vote.LOW;
        } else if (proposal.mediumCount > proposal.lowCount && proposal.mediumCount >= proposal.highCount) {
            return Vote.MEDIUM;
        } else {
            return Vote.HIGH;
        }
    }

}