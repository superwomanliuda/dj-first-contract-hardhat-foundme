async function main() {
    const rpcUrl = process.env.SEPOLIA_RPC_URL // Assuming the environment variable SEPOLIA_RPC_URL is set

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    const gasPrice = await provider.getGasPrice()
    console.log(gasPrice.toString())
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
