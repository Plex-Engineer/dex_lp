import { Chain, Config } from "@usedapp/core";
import addresses from "global/config/addresses"
import { TESTPAIRS, MAINPAIRS} from "global/config/pairs";
import { TOKENS } from "./tokens";

export const getAddressLink = (explorerUrl: string) => (address: string) => `${explorerUrl}/address/${address}`

export const getTransactionLink = (explorerUrl: string) => (txnId: string) => `${explorerUrl}/tx/${txnId}`

export const CantoMain = {
  name: "Canto Mainnet",
  symbol: "CANTO",
  chainId: 7700,
  addresses: addresses.cantoMainnet,
  tokens: TOKENS.cantoMainnet,
  pairs : MAINPAIRS,
  rpcUrl: "https://evm.plexnode.wtf",
  cosmosAPIEndpoint: "https://cosmos.plexnode.wtf/",
  isTestChain: false,
  blockExplorerUrl: "https://evm.explorer.canto.io/",
};

export const CantoTest = {
  name: "Canto Testnet",
  symbol: "CANTO",
  chainId: 740,
  addresses: addresses.testnet,
  tokens: TOKENS.cantoTestnet,
  pairs: TESTPAIRS,
  rpcUrl: "https://eth.plexnode.wtf",
  cosmosAPIEndpoint: "https://chain.plexnode.wtf/",
  isTestChain: true,
  blockExplorerUrl: "https://www.nothing.com",
};


export const CantoTestnet: Chain = {
  chainId: CantoTest.chainId,
  chainName: CantoTest.name,
  rpcUrl : CantoTest.rpcUrl,
  isTestChain: CantoTest.isTestChain,
  isLocalChain: false,
  multicallAddress: '0x121817438FC9b31ed4D6C4ED22eCde15af261f75',
  multicall2Address: '0xd546F2aaB14eA4d4Dc083795b3e94D0C471A272f',
  blockExplorerUrl: CantoTest.blockExplorerUrl,
  getExplorerAddressLink: getAddressLink("kovanEtherscanUrl"),
  getExplorerTransactionLink: getTransactionLink("kovanEtherscanUrl"),
}

export const CantoMainnet: Chain = {
  chainId: CantoMain.chainId,
  chainName: CantoMain.name,
  rpcUrl : CantoMain.rpcUrl,
  isTestChain: CantoMain.isTestChain,
  isLocalChain: false,
  multicallAddress: '0x210b88d5Ad4BEbc8FAC4383cC7F84Cd4F03d18c6',
  multicall2Address: '0x637490E68AA50Ea810688a52D7464E10c25A77c1',
  blockExplorerUrl: CantoMain.blockExplorerUrl,
  getExplorerAddressLink: getAddressLink("kovanEtherscanUrl"),
  getExplorerTransactionLink: getTransactionLink("kovanEtherscanUrl"),
}



export const config: Config = {
  networks : [CantoTestnet, CantoMainnet],
  readOnlyUrls: {
    [CantoTestnet.chainId]: CantoTest.rpcUrl,
    [CantoMainnet.chainId] : CantoMain.rpcUrl
  },
  noMetamaskDeactivate : true,
};

