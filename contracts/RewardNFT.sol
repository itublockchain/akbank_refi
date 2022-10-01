// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract RewardNFT is ERC721 {

    IERC20 paymentToken;
    uint256 private _totalSupply;
    uint256 public mintPrice;

    constructor(string memory name, string memory symbol, address paymentTokenAddress, uint256 _mintPrice) ERC721(name, symbol) {
        paymentToken = IERC20(paymentTokenAddress);
        mintPrice = _mintPrice;
    }

    function mint() external {
        require(balanceOf(msg.sender) == 0, "one per member");
        bool success = paymentToken.transferFrom(msg.sender, address(this), mintPrice);
        require(success);
        _mint(msg.sender, _totalSupply);
        unchecked { _totalSupply++; }
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }
}