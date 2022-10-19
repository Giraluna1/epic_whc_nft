// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


contract Ebano is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokensIds;

    constructor() ERC721("Ebano Gomez Londono", "Eban") {
        console.log("Ebano NFT");
    }

    function makeEban() public {
        uint256 newItemId = _tokensIds.current();
        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, "../data.json");

        _tokensIds.increment();

        console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
    }
}
