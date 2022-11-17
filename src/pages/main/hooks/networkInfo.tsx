import { CantoMainnet, CantoTestnet } from "cantoui";
import { addNetwork } from "global/utils/walletConnect/addCantoToWallet";
import create from "zustand";
import { devtools } from "zustand/middleware";

interface NetworkProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  chainId: string | undefined;
  setChainId: (chainId: string | undefined) => void;
  account: string | undefined;
  setAccount: (account: string | undefined) => void;
  balance: string;
  setBalance: (balance: string) => void;
}

export const useNetworkInfo = create<NetworkProps>()(
  devtools((set) => ({
    isConnected: true,
    setIsConnected: (connected) => set({ isConnected: connected }),
    chainId: undefined,
    setChainId: (chainId) => {
      set({ chainId: chainId });
      if (
        Number(chainId) == CantoTestnet.chainId ||
        Number(chainId) == CantoMainnet.chainId
      ) {
        set({ isConnected: true });
      } else {
        set({ isConnected: false });
      }
    },
    account: undefined,
    setAccount: (account) => {
      set({ account: account });
      if (account) {
        checkAdd(account);
      }
    },
    balance: "0",
    setBalance: (balance) => set({ balance: balance }),
  }))
);
const globalFetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
async function checkAdd(account: string) {
  const add = await (
    await fetch(
      "https://canto.plexnode.wtf/ethermint/evm/v1/cosmos_account/" + account,
      globalFetchOptions
    )
  ).json();
}