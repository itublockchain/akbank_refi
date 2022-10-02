// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

interface IMembership {
    function isMember(address member) external view returns (bool);
}

contract Fundraiser is ERC1155 {
    struct Fundraise {
        uint48 startTime;
        uint48 finishTime;
        address fundHolder;
        uint256 pricePerBasis;
    }

    uint256 constant HUNDRED_PERCENT_BPS = 10_000;
    
    uint256 fundraiseId;
    IMembership membership;
    mapping(uint256 => Fundraise) public IdToFundraise;
    mapping(uint256 => uint256) public IdToTotalSupply;

    constructor(string memory uri, address _membershipAddress) ERC1155(uri) {
        membership = IMembership(_membershipAddress);
    }

    modifier onlyMember() {
        require(membership.isMember(msg.sender), "only members");
        _;
    }

    function startFundraise(uint48 startTime, uint48 finishTime, address fundHolder, uint256 pricePerBasis) external onlyMember {
        require(block.timestamp <= startTime, "start time must be future");
        require(startTime < finishTime, "invalid finish time");
        Fundraise memory newFundraise = Fundraise(startTime, finishTime, fundHolder, pricePerBasis);
        IdToFundraise[fundraiseId] = newFundraise;
        unchecked { fundraiseId++; }
    }

    function helpFund(uint256 _fundraiseId) external payable {
        Fundraise memory fundraise = IdToFundraise[_fundraiseId];
        require(block.timestamp >= fundraise.startTime, "fundraise have not started");
        require(block.timestamp <= fundraise.finishTime, "fundraise over");
        uint256 amount = msg.value / fundraise.pricePerBasis;
        require(amount > 0, "insufficient payment");
        require(IdToTotalSupply[_fundraiseId] + amount <= HUNDRED_PERCENT_BPS, "total supply exceeds max");
        _mint(msg.sender, _fundraiseId, amount, "");
        unchecked { IdToTotalSupply[_fundraiseId] += amount; }
        address payable fundReceiver = payable(fundraise.fundHolder);
        (bool success, ) = fundReceiver.call{value: msg.value}("");
        require(success);
    }
}