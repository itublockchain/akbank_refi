// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Fundraiser is ERC1155 {
    uint256 constant HUNDRED_PERCENT_BPS = 10_000;

    constructor(string memory uri) ERC1155(uri) {

    }

}