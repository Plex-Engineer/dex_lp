import addresses from "global/config/addresses"

import ETH from "assets/icons/ETH.svg";
import NOTE from "assets/icons/note.svg";
import CANTO from "assets/icons/canto.png";
import USDC from "assets/icons/USDC.svg";
import USDT from "assets/icons/USDT.svg";
import ATOM from "assets/icons/ATOM.svg";

export interface Token {
    symbol: string,
    name: string,
    decimals: number,
    address: string,
    isERC20: boolean,
    isLP: boolean,
    icon: string,
    cTokenAddress: string
}
export interface CTOKEN {
    symbol: string,
    name: string, 
    decimals: number,
    address: string,
    underlying: Token
}

const metaMaskIcons = {
    Note: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/note.svg",
    CANTO: "https://raw.githubusercontent.com/Canto-Network/list/main/logos/token-logos/token/canto.png",
    USDT: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/USDT.svg",
    USDC: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/USDC.svg",
    ETH: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/ETH.svg",
    ATOM: "https://raw.githubusercontent.com/Canto-Network/list/22d70677e03cd416cdc388f6b36e5c6453abc48e/logos/token-logos/token/ATOM.svg",
    CantoAtomLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/CantoAtomLP.svg",
    CantoETHLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/CantoETHLP.svg",
    CantoNoteLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/CantoNoteLP.svg",
    USDCNoteLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/USDCNoteLP.svg",
    USDTNoteLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/USDTNoteLP.svg",
};

const icons = {
    Note: NOTE,
    CANTO: CANTO,
    USDT: USDT,
    USDC: USDC,
    ETH: ETH,
    ATOM: ATOM,
    CantoAtomLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/CantoAtomLP.svg",
    CantoETHLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/CantoETHLP.svg",
    CantoNoteLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/CantoNoteLP.svg",
    USDCNoteLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/USDCNoteLP.svg",
    USDTNoteLP: "https://raw.githubusercontent.com/Canto-Network/list/a4c12b3cbe13a9c7583b8db3c3de2883f05e864d/logos/token-logos/token/USDTNoteLP.svg",
};

export const decimals = {
    Note: 18,
    CANTO: 18,
    USDC: 6,
    USDT: 6,
    ETH: 18,
    ATOM: 6,
    WETH: 18,

    cNote: 18,
    cCANTO: 18,
    cUSDC: 18,
    cUSDT: 18,
    cETH: 18,
    cATOM: 18,

    CantoNoteLP: 18,
    cCantoNoteLP: 18,
    CantoAtomLP: 18,
    cCantoAtomLP: 18,
    NoteUSDCLP: 18,
    cNoteUSDCLP: 18,
    NoteUSDTLP: 18,
    cNoteUSDTLP: 18,
    CantoETHLP: 18,
    cCantoETHLP: 18,
};

export const TOKENS = {
    cantoTestnet: {
        CANTO:
        {
            symbol: 'CANTO',
            name: 'Canto',
            decimals: decimals.CANTO,
            address: addresses.testnet.ETH,
            isERC20: false,
            isLP: false,
            icon: icons.CANTO,
            cTokenAddress: addresses.testnet.CCanto
        },
        WCANTO:
        {
            symbol: "CANTO",
            name: "WCanto",
            decimals: decimals.CANTO,
            address: addresses.testnet.WCANTO,
            isERC20: true,
            isLP: false,
            icon: icons.CANTO,
            cTokenAddress: addresses.testnet.CCanto
        },
        NOTE:
        {
            symbol: "NOTE",
            name: "Note",
            decimals: decimals.Note,
            address: addresses.testnet.Note,
            isERC20: true,
            isLP: false,
            icon: icons.Note,
            cTokenAddress: addresses.testnet.CNote
        },
        ETH:
        {
            symbol: "ETH",
            name: "ETH",
            decimals: decimals.ETH,
            address: addresses.testnet.ETH,
            isERC20: true,
            isLP: false,
            icon: icons.ETH,
            cTokenAddress: addresses.testnet.CETH
        },
        ATOM:
        {
            symbol: "ATOM",
            name: "ATOM",
            decimals: decimals.ATOM,
            address: addresses.testnet.ATOM,
            isERC20: true,
            isLP: false,
            icon: icons.ATOM,
            cTokenAddress: addresses.testnet.CATOM
        },
        USDC:
        {
            symbol: "USDC",
            name: "USDC",
            decimals: decimals.USDC,
            address: addresses.testnet.USDC,
            isERC20: true,
            isLP: false,
            icon: icons.USDC,
            cTokenAddress: addresses.testnet.CUSDC
        },
        USDT:
        {
            symbol: "USDT",
            name: "USDT",
            decimals: decimals.USDT,
            address: addresses.testnet.USDT,
            isERC20: true,
            isLP: false,
            icon: icons.USDT,
            cTokenAddress: addresses.testnet.CUSDT
        },
        CantoNote:
        {
            symbol: "CantoNoteLP",
            name: "CantoNoteLP",
            decimals: decimals.CantoNoteLP,
            address: addresses.testnet.CantoNoteLP,
            isERC20: true,
            isLP: true,
            icon: icons.CantoNoteLP,
            cTokenAddress: addresses.testnet.cCantoNoteLP

        },
        CantoAtom:
        {
            symbol: "CantoAtomLP",
            name: "CantoAtomLP",
            decimals: decimals.CantoAtomLP,
            address: addresses.testnet.CantoAtomLP,
            isERC20: true,
            isLP: true,
            icon: icons.CantoAtomLP,
            cTokenAddress: addresses.testnet.cCantoAtomLP
        },
        NoteUSDC:
        {
            symbol: "NoteUSDCLP",
            name: "NoteUSDCLP",
            decimals: decimals.NoteUSDCLP,
            address: addresses.testnet.NoteUSDCLP,
            isERC20: true,
            isLP: true,
            icon: icons.USDCNoteLP,
            cTokenAddress: addresses.testnet.cNoteUSDCLP
        },
        NoteUSDT:
        {
            symbol: "NoteUSDTLP",
            name: "NoteUSDTLP",
            decimals: decimals.NoteUSDTLP,
            address: addresses.testnet.NoteUSDTLP,
            isERC20: true,
            isLP: true,
            icon: icons.USDTNoteLP,
            cTokenAddress: addresses.testnet.cNoteUSDTLP
        },
        CantoETH:
        {
            symbol: "CantoETHLP",
            name: "CantoETHLP",
            decimals: decimals.CantoETHLP,
            address: addresses.testnet.CantoETHLP,
            isERC20: true,
            isLP: true,
            icon: icons.CantoETHLP,
            cTokenAddress: addresses.testnet.cCantoETHLP
        },

    },
    cantoMainnet: {
        CANTO:
        {
            symbol: 'CANTO',
            name: 'CANTO',
            decimals: decimals.CANTO,
            address: '0x0000000000000000000000000000000000000000',
            isERC20: false,
            isLP: false,
            icon: icons.CANTO,
            cTokenAddress: addresses.cantoMainnet.CCanto
        },
        WCANTO:
        {
            symbol: "CANTO",
            name: "WCanto",
            decimals: decimals.CANTO,
            address: addresses.cantoMainnet.WCANTO,
            isERC20: true,
            isLP: false,
            icon: icons.CANTO,
            cTokenAddress: addresses.cantoMainnet.CCanto
        },
        NOTE:
        {
            symbol: "NOTE",
            name: "Note",
            decimals: decimals.Note,
            address: addresses.cantoMainnet.Note,
            isERC20: true,
            isLP: false,
            icon: icons.Note,
            cTokenAddress: addresses.cantoMainnet.CNote
        },
        ETH:
        {
            symbol: "ETH",
            name: "ETH",
            decimals: decimals.ETH,
            address: addresses.cantoMainnet.ETH,
            isERC20: true,
            isLP: false,
            icon: icons.ETH,
            cTokenAddress: addresses.cantoMainnet.CETH
        },
        ATOM:
        {
            symbol: "ATOM",
            name: "ATOM",
            decimals: decimals.ATOM,
            address: addresses.cantoMainnet.ATOM,
            isERC20: true,
            isLP: false,
            icon: icons.ATOM,
            cTokenAddress: addresses.cantoMainnet.CATOM
        },
        USDC:
        {
            symbol: "USDC",
            name: "USDC",
            decimals: decimals.USDC,
            address: addresses.cantoMainnet.USDC,
            isERC20: true,
            isLP: false,
            icon: icons.USDC,
            cTokenAddress: addresses.cantoMainnet.CUSDC
        },
        USDT:
        {
            symbol: "USDT",
            name: "USDT",
            decimals: decimals.USDT,
            address: addresses.cantoMainnet.USDT,
            isERC20: true,
            isLP: false,
            icon: icons.USDT,
            cTokenAddress: addresses.cantoMainnet.CUSDT
        },
        CantoNote:
        {
            symbol: "CantoNoteLP",
            name: "CantoNoteLP",
            decimals: decimals.CantoNoteLP,
            address: addresses.cantoMainnet.CantoNoteLP,
            isERC20: true,
            isLP: true,
            icon: icons.CantoNoteLP,
            cTokenAddress: addresses.cantoMainnet.cCantoNoteLP

        },
        CantoAtom:
        {
            symbol: "CantoAtomLP",
            name: "CantoAtomLP",
            decimals: decimals.CantoAtomLP,
            address: addresses.cantoMainnet.CantoAtomLP,
            isERC20: true,
            isLP: true,
            icon: icons.CantoAtomLP,
            cTokenAddress: addresses.cantoMainnet.cCantoAtomLP
        },
        NoteUSDC:
        {
            symbol: "NoteUSDCLP",
            name: "NoteUSDCLP",
            decimals: decimals.NoteUSDCLP,
            address: addresses.cantoMainnet.NoteUSDCLP,
            isERC20: true,
            isLP: true,
            icon: icons.USDCNoteLP,
            cTokenAddress: addresses.cantoMainnet.cNoteUSDCLP
        },
        NoteUSDT:
        {
            symbol: "NoteUSDTLP",
            name: "NoteUSDTLP",
            decimals: decimals.NoteUSDTLP,
            address: addresses.cantoMainnet.NoteUSDTLP,
            isERC20: true,
            isLP: true,
            icon: icons.USDTNoteLP,
            cTokenAddress: addresses.cantoMainnet.cNoteUSDTLP
        },
        CantoETH:
        {
            symbol: "CantoETHLP",
            name: "CantoETHLP",
            decimals: decimals.CantoETHLP,
            address: addresses.cantoMainnet.CantoETHLP,
            isERC20: true,
            isLP: true,
            icon: icons.CantoETHLP,
            cTokenAddress: addresses.cantoMainnet.cCantoETHLP
        },

    },
    ETHMainnet: {
        USDT: 
        {
            symbol: 'USDT',
            name: 'USDT',
            decimals: decimals.USDT,
            address: addresses.ETHMainnet.USDT,
            isERC20: true,
            isLP: false,
            icon: icons.USDT,
            cTokenAddress: "0x0000000000000000000000000000000000000000"
        },
        USDC: 
        {
            symbol: 'USDC',
            name: 'USDC',
            decimals: decimals.USDC,
            address: addresses.ETHMainnet.USDC,
            isERC20: true,
            isLP: false,
            icon: icons.USDC,
            cTokenAddress: "0x0000000000000000000000000000000000000000"
        },
        WETH: 
        {
            symbol: 'WETH',
            name: 'WETH',
            decimals: decimals.WETH,
            address: addresses.ETHMainnet.WETH,
            isERC20: true,
            isLP: false,
            icon: icons.ETH,
            cTokenAddress: "0x0000000000000000000000000000000000000000"
        },

    },
    GravityBridge: {
        E2H: 
        {
            symbol: 'E2H',
            name: 'E2H',
            decimals: 18,
            address: addresses.gravityBridgeTest.E2H,
            isERC20: true,
            isLP: false,
            icon: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
            cTokenAddress: "0x0000000000000000000000000000000000000000"
        },
        BYE: 
        {
            symbol: 'BYE',
            name: 'BYE',
            decimals: 18,
            address: addresses.gravityBridgeTest.BYE,
            isERC20: true,
            isLP: false,
            icon: "https://s2.coinmarketcap.com/static/img/coins/32x32/2.png",
            cTokenAddress: "0x0000000000000000000000000000000000000000"
        },
        MAX: 
        {
            symbol: 'MAX',
            name: 'MAX',
            decimals: 18,
            address: addresses.gravityBridgeTest.MAX,
            isERC20: true,
            isLP: false,
            icon: "https://s2.coinmarketcap.com/static/img/coins/32x32/3.png",
            cTokenAddress: "0x0000000000000000000000000000000000000000"
        }
    }
}

export const CTOKENS = {
    cantoTestnet: {
        CCANTO:
        {
            symbol: 'cCANTO',
            name: 'cCanto',
            decimals: decimals.cCANTO,
            address: addresses.testnet.CCanto,
            underlying: TOKENS.cantoTestnet.CANTO
        },
        CNOTE:
        {
            symbol: "cNOTE",
            name: "CNote",
            decimals: decimals.cNote,
            address: addresses.testnet.CNote,
            underlying: TOKENS.cantoTestnet.NOTE
        },
        CETH:
        {
            symbol: "cETH",
            name: "CETH",
            decimals: decimals.cETH,
            address: addresses.testnet.CETH,
            underlying: TOKENS.cantoTestnet.ETH
        },
        CATOM:
        {
            symbol: "cATOM",
            name: "CATOM",
            decimals: decimals.cATOM,
            address: addresses.testnet.CATOM,
            underlying: TOKENS.cantoTestnet.ATOM
        },
        CUSDC:
        {
            symbol: "cUSDC",
            name: "CUSDC",
            decimals: decimals.cUSDC,
            address: addresses.testnet.CUSDC,
            underlying: TOKENS.cantoTestnet.USDC
        },
        CUSDT:
        {
            symbol: "cUSDT",
            name: "CUSDT",
            decimals: decimals.cUSDT,
            address: addresses.testnet.CUSDT,
            underlying: TOKENS.cantoTestnet.USDT
        },
        CCantoNote:
        {
            symbol: "cCantoNoteLP",
            name: "CCantoNoteLP",
            decimals: decimals.cCantoNoteLP,
            address: addresses.testnet.cCantoNoteLP,
            underlying: TOKENS.cantoTestnet.CantoNote

        },
        CCantoAtom:
        {
            symbol: "cCantoAtomLP",
            name: "CCantoAtomLP",
            decimals: decimals.cCantoAtomLP,
            address: addresses.testnet.cCantoAtomLP,
            underlying: TOKENS.cantoTestnet.CantoAtom
        },
        CNoteUSDC:
        {
            symbol: "cNoteUSDCLP",
            name: "CNoteUSDCLP",
            decimals: decimals.cNoteUSDCLP,
            address: addresses.testnet.cNoteUSDCLP,
            underlying: TOKENS.cantoTestnet.NoteUSDC
        },
        CNoteUSDT:
        {
            symbol: "cNoteUSDTLP",
            name: "CNoteUSDTLP",
            decimals: decimals.cNoteUSDTLP,
            address: addresses.testnet.cNoteUSDTLP,
            underlying: TOKENS.cantoTestnet.NoteUSDT
        },
        CCantoETH:
        {
            symbol: "cCantoETHLP",
            name: "CCantoETHLP",
            decimals: decimals.cCantoETHLP,
            address: addresses.testnet.cCantoETHLP,
            underlying: TOKENS.cantoTestnet.CantoETH
        },
    },
    cantoMainnet: {
        CCANTO:
        {
            symbol: 'cCANTO',
            name: 'CCANTO',
            decimals: decimals.cCANTO,
            address: addresses.cantoMainnet.CCanto,
            underlying: TOKENS.cantoMainnet.CANTO
        },
        CNOTE:
        {
            symbol: "cNOTE",
            name: "CNote",
            decimals: decimals.cNote,
            address: addresses.cantoMainnet.CNote,
            underlying: TOKENS.cantoMainnet.NOTE
        },
        CETH:
        {
            symbol: "cETH",
            name: "CETH",
            decimals: decimals.cETH,
            address: addresses.cantoMainnet.CETH,
            underlying: TOKENS.cantoMainnet.ETH
        },
        CATOM:
        {
            symbol: "cATOM",
            name: "CATOM",
            decimals: decimals.cATOM,
            address: addresses.cantoMainnet.CATOM,
            underlying: TOKENS.cantoMainnet.ATOM
        },
        CUSDC:
        {
            symbol: "cUSDC",
            name: "CUSDC",
            decimals: decimals.cUSDC,
            address: addresses.cantoMainnet.CUSDC,
            underlying: TOKENS.cantoMainnet.USDC
        },
        CUSDT:
        {
            symbol: "cUSDT",
            name: "CUSDT",
            decimals: decimals.cUSDT,
            address: addresses.cantoMainnet.CUSDT,
            underlying: TOKENS.cantoMainnet.USDT
        },
        CCantoNote:
        {
            symbol: "cCantoNoteLP",
            name: "CCantoNoteLP",
            decimals: decimals.cCantoNoteLP,
            address: addresses.cantoMainnet.cCantoNoteLP,
            underlying: TOKENS.cantoMainnet.CantoNote

        },
        CCantoAtom:
        {
            symbol: "cCantoAtomLP",
            name: "CCantoAtomLP",
            decimals: decimals.cCantoAtomLP,
            address: addresses.cantoMainnet.cCantoAtomLP,
            underlying: TOKENS.cantoMainnet.CantoAtom
        },
        CNoteUSDC:
        {
            symbol: "cNoteUSDCLP",
            name: "CNoteUSDCLP",
            decimals: decimals.cNoteUSDCLP,
            address: addresses.cantoMainnet.cNoteUSDCLP,
            underlying: TOKENS.cantoMainnet.NoteUSDC
        },
        CNoteUSDT:
        {
            symbol: "cNoteUSDTLP",
            name: "CNoteUSDTLP",
            decimals: decimals.cNoteUSDTLP,
            address: addresses.cantoMainnet.cNoteUSDTLP,
            underlying: TOKENS.cantoMainnet.NoteUSDT
        },
        CCantoETH:
        {
            symbol: "cCantoETHLP",
            name: "CCantoETHLP",
            decimals: decimals.cCantoETHLP,
            address: addresses.cantoMainnet.cCantoETHLP,
            underlying: TOKENS.cantoMainnet.CantoETH
        },
    },
}



