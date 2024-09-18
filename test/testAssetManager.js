const { expect } = require("chai");

describe("TokenizedAssetManager", function() {
    it("Should mint and burn tokens", async function() {
        const [owner, addr1] = await ethers.getSigners();

        const TokenizedAssetManager = await ethers.getContractFactory("TokenizedAssetManager");
        const contract = await TokenizedAssetManager.deploy(1000000);
        await contract.deployed();

        // Check initial balance
        expect(await contract.balanceOf(owner.address)).to.equal(1000000 * 10 ** 18);

        // Mint tokens
        await contract.mint(addr1.address, 500000 * 10 ** 18);
        expect(await contract.balanceOf(addr1.address)).to.equal(500000 * 10 ** 18);

        // Burn tokens
        await contract.burn(addr1.address, 200000 * 10 ** 18);
        expect(await contract.balanceOf(addr1.address)).to.equal(300000 * 10 ** 18);
    });
});