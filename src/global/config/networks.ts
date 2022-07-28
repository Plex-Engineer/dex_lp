import { Chain, Config } from "@usedapp/core";
import addresses from "global/config/addresses"
import { TESTPAIRS, MAINPAIRS} from "global/config/pairs";
import { TOKENS } from "./tokens";

export const getAddressLink = (explorerUrl: string) => (address: string) => `${explorerUrl}/address/${address}`

export const getTransactionLink = (explorerUrl: string) => (txnId: string) => `${explorerUrl}/tx/${txnId}`

export const CantoTest: Chain = {
  chainId: 771,
  chainName: 'Canto Test',
  rpcUrl : "http://165.227.98.94:1317",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xaEc0D885BBFa4B339eFCd490c50053738A872fd0',
  multicall2Address: '0xF4583A82384330fBFd0ABbF98189425c8471059e',
  blockExplorerUrl: "https://www.nothing.com",
  getExplorerAddressLink: getAddressLink("kovanEtherscanUrl"),
  getExplorerTransactionLink: getTransactionLink("kovanEtherscanUrl"),
}

export const CantoMain: Chain = {
  chainId: 740,
  chainName: 'Canto Main',
  rpcUrl : "https://eth.plexnode.wtf",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0x121817438FC9b31ed4D6C4ED22eCde15af261f75',
  multicall2Address: '0xd546F2aaB14eA4d4Dc083795b3e94D0C471A272f',
  blockExplorerUrl: "https://www.nothing.com",
  getExplorerAddressLink: getAddressLink("kovanEtherscanUrl"),
  getExplorerTransactionLink: getTransactionLink("kovanEtherscanUrl"),
}



export const config: Config = {
  networks : [CantoTest, CantoMain],
  readOnlyUrls: {
    [CantoTest.chainId]: "https://canto.evm.chandrastation.com/",
    [CantoMain.chainId] : "https://eth.plexnode.wtf"
  },
  noMetamaskDeactivate : true,
};


export const networkProperties = [
  {
    name: "Canto Testnet",
    symbol: "CANTO",
    chainId : CantoTest.chainId,
    pairs : TESTPAIRS,
    tokens: TOKENS.cantoTestnet,
    addresses: addresses.testnet,
    chainInfo: CantoTest
  },
  {
    name: "Canto Mainnet",
    symbol: "CANTO",
    chainId: CantoMain.chainId,
    pairs: MAINPAIRS,
    tokens: TOKENS.cantoMainnet,
    addresses: addresses.cantoMainnet,
    chainInfo: CantoMain
  }
]