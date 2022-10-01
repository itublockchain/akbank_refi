// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardNFT is ERC721, Ownable {
    uint256 private _tokenId;
    uint256 private _totalSupply;
    
    mapping(address => uint256) addressToId;
    
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function makeMember(address newMember) external onlyOwner {
        require(balanceOf(newMember) == 0, "already member");
        unchecked { _tokenId++; }
        _safeMint(newMember, _tokenId);
        addressToId[newMember] = _tokenId;
        unchecked { _totalSupply++; }
    }

    function removeMember(address memberToKick) external onlyOwner {
        require(balanceOf(memberToKick) == 1, "not a member");
        uint256 IdToBurn = addressToId[memberToKick];
        _burn(IdToBurn); 
        unchecked { _totalSupply--; }
    }

    function isMember(address member) external view returns (bool) {
        return balanceOf(member) == 1;
    }

    function numberOfMembers() external view returns (uint256) {
        return _totalSupply;
    }
}