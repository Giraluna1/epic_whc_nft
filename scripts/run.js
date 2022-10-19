
const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("Ebano");
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let token = await nftContract.makeEban();
  await token.wait();
}

const runMain = async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
  }
}
runMain();