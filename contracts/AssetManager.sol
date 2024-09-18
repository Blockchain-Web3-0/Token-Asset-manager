// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenizedAssetManager is ERC20 {
    address public owner;

    constructor(uint256 initialSupply) ERC20("TokenizedAsset", "TAS") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
        owner = msg.sender;
    }

    function mint(address account, uint256 amount) public {
        require(msg.sender == owner, "Only owner can mint");
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public {
        require(msg.sender == owner, "Only owner can burn");
        _burn(account, amount);
    }
}
