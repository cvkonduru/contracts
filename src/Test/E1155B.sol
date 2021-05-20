// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract E1155B is ERC1155 {
    uint256 private tokenId;
    uint256 public constant GOLD = 1000;
    uint256 public constant SILVER = 1001;
    uint256 public constant THORS_HAMMER = 1002;
    uint256 public constant SWORD = 1003;
    uint256 public constant SHIELD = 1004;

    constructor(
        address deployer,
        address beneficiary,
        address lender
    ) ERC1155("https://api.bccg.digital/api/bccg/{id}.json") {
        _mint(deployer, GOLD, 1, "");
        _mint(deployer, SILVER, 10, "");
        _mint(beneficiary, THORS_HAMMER, 20, "");
        _mint(lender, SWORD, 1, "");
        _mint(lender, SHIELD, 20, "");
    }

    function award() public returns (uint256) {
        tokenId++;
        _mint(msg.sender, tokenId, 1, "");
        return tokenId;
    }
}
