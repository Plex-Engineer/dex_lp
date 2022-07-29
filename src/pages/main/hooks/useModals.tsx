import { TransactionState } from "@usedapp/core";
import create from "zustand"
import {devtools} from "zustand/middleware"
export enum ModalType {
    NONE,
    ADD,
    ADD_CONFIRM,
    REMOVE,
    REMOVE_CONFIRM,
    ADD_OR_REMOVE,
}

interface ModalProps {
    loading : boolean;
    setLoading : (val : boolean) => void;
    status : TransactionState;
    setStatus : (status : TransactionState) => void;
    modalType : ModalType;
    setModalType : (modalType : ModalType) => void;
    confirmationValues : {
          amount1: number,
          amount2: number,
          percentage : number,
          slippage: number,
          deadline: number,
    },
    setConfirmationValues : (value : {
        amount1: number,
        amount2: number,
        percentage : number,
        slippage: number,
        deadline: number,
  }) => void;
}
  

  const useModals = create<ModalProps>()(devtools((set)=>({
    loading : false,
    setLoading : (value)=> set({loading : value}),
    status : 'None',
    setStatus : (status) => set({
        status
    }),
    modalType : ModalType.NONE,
    setModalType : (modalType) => set({
        modalType
    }),
    confirmationValues : {
        amount1 : 0,
        amount2 : 0,
        deadline : 0,
        slippage : 0,
        percentage : 0
    },
    setConfirmationValues : (values) => set({confirmationValues : values})
  })))

export default useModals