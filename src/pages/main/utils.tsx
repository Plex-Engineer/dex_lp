
export function getTokenBFromA (tokenAAmount: number, ratio: number): number {
    return tokenAAmount/ratio;
}

export function getTokenAFromB (tokenBAmount: number, ratio: number): number {
    return tokenBAmount * ratio;
}

export function truncateNumber(value:number, decimals:number) {
    return (Math.trunc(value * Math.pow(10,decimals))/Math.pow(10,decimals))
  }