export const formatBalance = (num: string | number) => {
    if(Number(num) > 1){
      return (Math.floor(Number(Number(num).toFixed(3))*100)/100).toFixed(2)
    } else if(num == 0){
      return "0.00"
    } else {
      return (Math.floor(Number(Number(num).toFixed(5))*10000)/10000).toFixed(4)
    }
  }

export const noteSymbol:string = "Ꞥ";

