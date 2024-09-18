async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const TokenizedAssetManager = await ethers.getContractFactory("TokenizedAssetManager");
    const contract = await TokenizedAssetManager.deploy(1000000);
    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});