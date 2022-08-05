import { CantoMainnet, CantoTestnet } from "cantoui";
import { ethers } from "ethers";

export function getTokenBFromA (tokenAAmount: number, ratio: number): number {
    return tokenAAmount/ratio;
}

export function getTokenAFromB (tokenBAmount: number, ratio: number): number {
    return tokenBAmount * ratio;
}

export function truncateNumber(value:number, decimals:number) {
    return (Math.trunc(value * Math.pow(10,decimals))/Math.pow(10,decimals))
  }

export function truncateByZeros(value:string) {
    if (Number(value) > 1) {
        return truncateNumber(Number(value), 4);
    }
    return truncateNumber(Number(value), findFirstNonZero(value) + 4);

}

function findFirstNonZero(value:string) : number{
    for (let i = 2; i<value.length; i++) {
        if (value[i] != "0") {
            return i - 1;
        }
    }
    return value.length - 1;
}

export async function getCurrentBlockTimestamp (chainId : number | undefined) {
    //getting current block timestamp to add to the deadline that the user inputs
    const provider = new ethers.providers.JsonRpcProvider(CantoTestnet.chainId == chainId ? CantoTestnet.rpcUrl : CantoMainnet.rpcUrl);
    const blockNumber = await provider.getBlockNumber();
    const blockData = await provider.getBlock(blockNumber);
    return blockData.timestamp;
}