import styled from "@emotion/styled";
import DexTable from "./components/table";
import DexRow from "./components/row";
import { useEffect, useState } from "react";
import useDex from "pages/main/hooks/useTokens";
import { AllPairInfo } from "pages/main/hooks/useTokens";
import { noteSymbol } from "global/utils/utils";

// import { DexModalManager, DexModalType } from "components/modals/dex/dexModalManager";
// import { useDexModalType } from "providers/dexContext";
import { toast } from "react-toastify";
import { useNotifications, useEthers } from "@usedapp/core";
import {
  addNetwork,
  checkNetworkVersion,
} from "global/config/addCantoToWallet";
import useModals, { ModalType } from "./hooks/useModals";
import { ModalManager } from "./modals/BaseModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  min-height: 100vh;
  h1 {
    font-size: 12rem;
    color: var(--primary-color);
    text-align: center;
    font-weight: 300;
    letter-spacing: -0.13em;
    position: relative;
    height: 26rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 14px 14px rgba(6, 252, 153, 0.2);
  }

  & > button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 0px;
    padding: 0.6rem 2.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.03em;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 3rem;

    &:hover {
      background-color: var(--primary-color-dark);
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 20vw;
    }
  }
`;

const Dex = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Mixpanel.events.pageOpened("Dex Market", '');
  const [loading, setLoading] = useState(true);
  const { account, chainId, switchNetwork } = useEthers();
  const [currentPair, setCurrentPair] = useState<AllPairInfo>();
  const { notifications } = useNotifications();
  const [notifs, setNotifs] = useState<any[]>([]);

  const setModalType = useModals((state) => state.setModalType);
  const pairs = useDex(account, chainId);

  function openModal(data: AllPairInfo) {
    setCurrentPair(data);
    setIsOpen(true);
  }

  //Let the user know they are on the wrong network
  const [isOnMain, setIsOnMain] = useState(true);
  useEffect(() => {
    // addNetwork();
    setTimeout(() => {
      const onCantoNetwork = checkNetworkVersion();
      if (!onCantoNetwork) {
        toast.error("please switch networks", {
          toastId: 1,
        });
      }
      setIsOnMain(onCantoNetwork);
    }, 2000);
  }, [chainId]);

  useEffect(() => {
    notifications.forEach((item) => {
      if (
        item.type == "transactionStarted" &&
        !notifs.find((it) => it.id == item.id)
      ) {
        setNotifs([...notifs, item]);
      }
      if (
        item.type == "transactionSucceed" ||
        item.type == "transactionFailed"
      ) {
        setNotifs(
          notifs.filter(
            (localItem) => localItem.transaction.hash != item.transaction.hash
          )
        );
      }
    });

    notifications.map((noti) => {
      if (
        //@ts-ignore
        (noti?.transactionName?.includes("type") &&
          noti.type == "transactionSucceed") ||
        noti.type == "transactionFailed"
      ) {
        const isSuccesful = noti.type != "transactionFailed";
        //@ts-ignore
        const msg: Details = JSON.parse(noti?.transactionName);
        switch (msg.type) {
          case "add":
            msg.type = "added";
            break;
          case "remove":
            msg.type = "removed";
            break;
          case "Enable":
            msg.type = "enabled";
            break;
        }

        const msged =
          (Number(msg.amount) > 0 ? Number(msg.amount).toFixed(2) : "") +
          ` ${msg.name} has been ${msg.type}`;

        toast(msged, {
          position: "top-right",
          autoClose: 5000,
          toastId: noti.submittedAt,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progressStyle: {
            color: `${
              isSuccesful ? "var(--primary-color)" : "var(--error-color"
            }`,
          },
          style: {
            border: "1px solid var(--primary-color)",
            borderRadius: "0px",
            paddingBottom: "3px",
            background: "black",
            color: `${
              isSuccesful ? "var(--primary-color)" : "var(--error-color"
            }`,
            height: "100px",
            fontSize: "20px",
          },
        });
      }
    });
  }, [notifications]);

  return !isOnMain ? (
    <div style={{ color: "red", textAlign: "center" }}>
      <h1>please switch to canto mainnet</h1>
    </div>
  ) : (
    <Container>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Canto Dex | A Foundation Layer for Cross-chain Compatibility.</title>
      </Helmet> */}
      <div style={{ marginBottom: "75px" }}>
        <ModalManager
          data={currentPair}
          chainId={chainId}
          account={account}
          onClose={() => {
            setIsOpen(false);
            setModalType(ModalType.NONE);
          }}
        />
      </div>
      {/* <h1>&gt;_dex LP_</h1> */}
      <h4 style={{ textAlign: "center" }}>
        to swap tokens, visit{" "}
        <a
          style={{ color: "white" }}
          href="https://app.slingshot.finance/trade/"
        >
          Slingshot
        </a>
      </h4>

      {pairs?.filter((pair: AllPairInfo) => Number(pair.userSupply.totalLP) > 0)
        .length ?? 0 > 0 ? (
        <div>
          <p
            style={{
              width: "1200px",
              margin: "0 auto",
              padding: "0",
            }}
          >
            current position
          </p>
          <DexTable>
            {pairs?.map((pair: AllPairInfo) => {
              return Number(pair.userSupply.totalLP) > 0 ? (
                <DexRow
                  key={pair.basePairInfo.address}
                  iconLeft={pair.basePairInfo.token1.icon}
                  iconRight={pair.basePairInfo.token2.icon}
                  onClick={() => {
                    setModalType( Number(pair.userSupply.totalLP) > 0 ? ModalType.ADD_OR_REMOVE : ModalType.ADD)
                    openModal(pair);
                  }}
                  assetName={
                    pair.basePairInfo.token1.symbol +
                    "/" +
                    pair.basePairInfo.token2.symbol
                  }
                  totalValueLocked={noteSymbol + pair.totalSupply.tvl}
                  apr={"23.2"}
                  position={
                    Number(pair.userSupply.totalLP).toFixed(4) + " LP Tokens"
                  }
                  share={(pair.userSupply.percentOwned * 100)
                    .toFixed(2)
                    .toString()}
                />
              ) : null;
            })}
          </DexTable>
        </div>
      ) : null}

      {pairs?.filter(
        (pair: AllPairInfo) => Number(pair.userSupply.totalLP) == 0
      ).length ?? 0 > 0 ? (
        <div>
          <p
            style={{
              width: "1200px",
              margin: "0 auto",
              padding: "0",
            }}
          >
            pools
          </p>
          <DexTable>
            {pairs?.map((pair: AllPairInfo) => {
              return Number(pair.userSupply.totalLP) > 0 ? null : (
                <DexRow
                  key={pair.basePairInfo.address}
                  iconLeft={pair.basePairInfo.token1.icon}
                  iconRight={pair.basePairInfo.token2.icon}
                  onClick={() => {
                    
                    setModalType( Number(pair.userSupply.totalLP) > 0 ? ModalType.ADD_OR_REMOVE : ModalType.ADD)
                    openModal(pair);
                  }}
                  assetName={
                    pair.basePairInfo.token1.symbol +
                    "/" +
                    pair.basePairInfo.token2.symbol
                  }
                  totalValueLocked={noteSymbol + pair.totalSupply.tvl}
                  apr={"23.2"}
                  position={
                    Number(pair.userSupply.totalLP).toFixed(4) + " LP Tokens"
                  }
                  share={(pair.userSupply.percentOwned * 100)
                    .toFixed(2)
                    .toString()}
                />
              );
            })}
          </DexTable>
        </div>
      ) : null}
    </Container>
  );
};
export default Dex;
