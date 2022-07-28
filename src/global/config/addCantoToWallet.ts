import { CantoTest, CantoMain } from "global/config/networks";

export function addNetwork() {
  //@ts-ignore
  window.ethereum
    .request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x" + CantoMain.chainId.toString(16),
          chainName: "Canto",
          nativeCurrency: {
            name: "Canto Coin",
            symbol: "CANTO",
            decimals: 18,
          },
          rpcUrls: [CantoMain.rpcUrl],
          blockExplorerUrls: [CantoMain.blockExplorerUrl],
        },
      ],
    })
    .catch((error: any) => {
      console.log(error);
    });
}

export function checkNetworkVersion(): boolean {
  //@ts-ignore
  if (window.ethereum) {
    //@ts-ignore
    const currentChain = window.ethereum.networkVersion;
    if (
      !(currentChain == CantoMain.chainId || currentChain == CantoTest.chainId)
    ) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}
