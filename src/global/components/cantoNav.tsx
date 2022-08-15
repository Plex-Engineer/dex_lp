import { useEthers } from "@usedapp/core";
import { NavBar, useAlert } from "cantoui";
import { addNetwork, getAccountBalance, getChainIdandAccount } from "global/utils/walletConnect/addCantoToWallet";
import { useEffect } from "react";
import { useNetworkInfo } from "pages/main/hooks/networkInfo";
import logo from "./../../assets/logo.svg"

export const CantoNav = () => {
  const netWorkInfo = useNetworkInfo();
  const alert = useAlert();
  const { activateBrowserWallet, account } = useEthers();

  async function setChainInfo() {
    const [chainId, account] = await getChainIdandAccount();
    netWorkInfo.setChainId(chainId);
    netWorkInfo.setAccount(account);
  }

  useEffect(() => {
    if (!netWorkInfo.isConnected) {
      alert.show("Failure", <p>this network is not supported on the lp interface, please <a onClick={addNetwork} style={{cursor: "pointer", textDecoration: "underline", color: "red"}}>switch networks</a></p>)
    } else {
      alert.close();
    }
  }, [netWorkInfo.isConnected])

  useEffect(() => {
    setChainInfo();
    //@ts-ignore
  }, [window.ethereum?.networkVersion, window.ethereum?.selectedAddress]);

  //@ts-ignore
  if (window.ethereum) {
    //@ts-ignore
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });

    //@ts-ignore
    window.ethereum.on("networkChanged", () => {
      window.location.reload();
    });
  }

  async function getBalance() {
    if (netWorkInfo.account != undefined) {
      netWorkInfo.setBalance(await getAccountBalance(netWorkInfo.account))
    }
  }
  useEffect(() => {
    getBalance();
  },[netWorkInfo.account])

  return (
    <NavBar
      title="lp interface"
      onClick={() => {
        activateBrowserWallet();
        addNetwork();
      }}
      chainId={Number(netWorkInfo.chainId)}
      account={netWorkInfo.account ?? ""}
      isConnected={netWorkInfo.isConnected && account ? true : false}
      balance={netWorkInfo.balance}
      currency={"CANTO"}
      logo={logo}
      currentPage="lp interface"
    />
  );
};