import Popup from "reactjs-popup";
import styled from "styled-components";
import AddModal from "components/modals/dex/addModal";
import close from "assets/close.svg";
import { Mixpanel } from "mixpanel";
import AddRemoveModal from "./addRemove";
import RemoveModal from "./removeModal";
import { RemoveLiquidityConfirmation } from "./removeConfirmation";
import { AddLiquidityConfirmation } from "./addConfirmation";
//enum for modal types and states such a wallet connection, lending and dex
export enum DexModalType {
  NONE,
  ADDREMOVE,
  ADDCONFIRM,
  REMOVECONFIRM,
  REMOVE,
  ADD,
}
// export type DexModalType = 'None' | 'DEX' | 'ADDREMOVE' | 'CONFIRM' | 'REMOVE' | 'ADD'

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"

  &-overlay {
    background-color: #17271c6d;
    backdrop-filter: blur(2px);
    z-index: 10;
  }
  // use your custom style for ".popup-content"
  &-content {
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: black;
    border: 1px solid var(--primary-color);

    scroll-behavior: smooth;
    /* width */
    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #151515;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      box-shadow: inset 2 2 5px var(--primary-color);
      background: #111111;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #07e48c;
    }

    & {
      overflow-y: auto;
    }
    &:hover::-webkit-scrollbar-thumb {
      background: #353535;
    }
  }

  
`;

interface Props {
  modalType: any;
  isOpen: boolean;
  onClose: () => void;
  data?: any;
  chainId?: number;
  account?: string;
}

const DexModalManager = (props: Props) => {
  return (
    <StyledPopup
      open={props.isOpen}
      onClose={() => {
        props.onClose();
        Mixpanel.events.lendingMarketActions.modalInteraction(
          "addd",
          props.modalType.toString(),
          "name",
          false
        );
      }}
      lockScroll
      modal
      position="center center"
      nested
    >
      <img
        src={close}
        style={{
          position: "absolute",
          top: ".5rem",
          right: ".5rem",
          width: "40px",
          cursor: "pointer",
          zIndex: "3",
        }}
        alt="close"
        onClick={props.onClose}
      />

      {props.modalType[0] === DexModalType.ADD && (
        <AddModal
          onClose={props.onClose}
          value={props.data}
          chainId={props.chainId}
          account={props.account}
        />
      )}
      {props.modalType[0] === DexModalType.REMOVE && (
        <RemoveModal
          onClose={props.onClose}
          value={props.data}
          chainId={props.chainId}
          account={props.account}
        />
      )}
      {props.modalType[0] === DexModalType.ADDREMOVE && (
        <AddRemoveModal
          onClose={props.onClose}
          value={props.data}
          chainId={props.chainId}
          account={props.account}
        />
      )}
      {props.modalType[0] === DexModalType.REMOVECONFIRM && (
        <RemoveLiquidityConfirmation
          onClose={props.onClose}
          value={props.data}
          chainId={props.chainId}
          account={props.account}
        />
      )}
      {props.modalType[0] === DexModalType.ADDCONFIRM && (
        <AddLiquidityConfirmation
          onClose={props.onClose}
          value={props.data}
          chainId={props.chainId}
          account={props.account}
        />
      )}
    </StyledPopup>
  );
};

export { DexModalManager };
