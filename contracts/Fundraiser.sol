// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

interface IMembership {
    function isMember(address member) external view returns (bool);
}

contract Fundraiser is ERC1155 {
    struct Fundraise {
        string name;
        uint48 startTime;
        uint48 finishTime;
        address fundHolder; //address which donations will be directed to
        uint256 pricePerBasis; //price of one piece, total expected donation / 10_000
    }

    uint256 constant HUNDRED_PERCENT_BPS = 10_000; //total number of pieces
    
    uint256 private _fundraiseId;
    IMembership membership; //organization membership NFT 
    mapping(uint256 => Fundraise) public idToFundraise;
    mapping(uint256 => uint256) public idToTotalSupply;

    event NewFundraise(
        uint256 fundraiseId,
        string name,
        uint48 startTime,
        uint48 finishTime,
        address fundHolder,
        uint256 pricePerBasis
    );

    constructor(string memory uri, address _membershipAddress) ERC1155(uri) {
        membership = IMembership(_membershipAddress);
    }

    modifier onlyMember() {
        require(membership.isMember(msg.sender), "only members");
        _;
    }

    function startFundraise(string calldata name, uint48 startTime, uint48 finishTime, address fundHolder, uint256 pricePerBasis) external onlyMember returns (uint256) {
        require(block.timestamp <= startTime, "start time must be future");
        require(startTime < finishTime, "invalid finish time");
        Fundraise memory newFundraise = Fundraise(name, startTime, finishTime, fundHolder, pricePerBasis);
        uint256 newId = _fundraiseId;
        idToFundraise[newId] = newFundraise;
        unchecked { _fundraiseId++; }
        emit NewFundraise(newId, name, startTime, finishTime, fundHolder, pricePerBasis);
        return newId;
    }

    function fund(uint256 __fundraiseId) external payable {
        Fundraise memory fundraise = idToFundraise[__fundraiseId];
        require(block.timestamp >= fundraise.startTime, "fundraise have not started");
        require(block.timestamp <= fundraise.finishTime, "fundraise over");
        uint256 amount = msg.value / fundraise.pricePerBasis;
        require(amount > 0, "insufficient payment");
        require(idToTotalSupply[__fundraiseId] + amount <= HUNDRED_PERCENT_BPS, "total supply exceeds max");
        _mint(msg.sender, __fundraiseId, amount, "");
        unchecked { idToTotalSupply[__fundraiseId] += amount; }
        address payable fundReceiver = payable(fundraise.fundHolder);
        (bool success, ) = fundReceiver.call{value: msg.value}("");
        require(success);
    }
}