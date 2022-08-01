import styled from "@emotion/styled";
import Table from "./components/table";
import Row, { TransactionRow } from "./components/row";
import { useEffect, useState } from "react";
import useDex from "pages/main/hooks/useTokens";
import { AllPairInfo } from "pages/main/hooks/useTokens";
import { noteSymbol } from "global/utils/utils";
import { toast } from "react-toastify";
import { useNotifications, useEthers } from "@usedapp/core";
import {
  checkNetworkVersion,
} from "global/config/addCantoToWallet";
import useModals, { ModalType } from "./hooks/useModals";
import { ModalManager } from "./modals/ModalManager";
import style from "./Dex.module.scss"

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
  // Mixpanel.events.pageOpened("Dex Market", '');
  const { account, chainId } = useEthers();
  const { notifications } = useNotifications();
  const [notifs, setNotifs] = useState<any[]>([]);

  const [setModalType, activePair, setActivePair] = useModals((state) => [state.setModalType, state.activePair, state.setActivePair]);
  const pairs = useDex(account, chainId);

 

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
    <Container style={style}>

      <div style={{ marginBottom: "75px" }}>
        <ModalManager
          data={activePair}
          chainId={chainId}
          account={account}
          onClose={() => {
            setModalType(ModalType.NONE);
          }}
        />
      </div>
      <h4 style={{ textAlign: "center" }}>
        to swap tokens, visit{" "}
        <a
          style={{ color: "#a2fca3" }}
          href="https://app.slingshot.finance/trade/"
        >
          Slingshot
        </a>
      </h4>
      {notifs.filter(
              (filterItem) => filterItem.type == "transactionStarted"
            ).length > 0 ? (
              <div>
          <p 
            style={{
              width: "1200px",
              margin: "0 auto",
              padding: "0",
            }}
          >
            ongoing transaction
          </p>
              <Table columns={["name","transaction","time"]}>
                {notifs.map((item) => {
                  if (
                    //@ts-ignore
                    item?.transactionName?.includes("type") &&
                    item.type == "transactionStarted"
                  ) {
                    //@ts-ignore
                    const msg: Details = JSON.parse(item?.transactionName);

                    switch (msg.type) {
                      case "add":
                        msg.type = "adding";
                        break;
                      case "remove":
                        msg.type = "removing";
                        break;
                      case "Enable":
                        msg.type = "enabling";
                        break;
                    }
                    return (
                      <TransactionRow
                      key={item.submittedAt}
                        icon={msg.icon}
                        name={msg.name.toLowerCase()}
                        status={
                          msg.type +
                          " " +
                          (Number(msg.amount) > 0
                            ? Number(msg.amount).toFixed(2)
                            : "") +
                          " " +
                          msg.name
                        }
                        date={new Date(item.submittedAt)}
                      />
                    );
                  }
                })}
              </Table>
              </div>
            ) : null}
      {pairs?.filter((pair: AllPairInfo) => Number(pair.userSupply.totalLP) > 0)
        .length ?? 0 > 0 ? (
        <div>
          <p className="table-name"
            style={{
              width: "1200px",
              margin: "0 auto",
              padding: "0",
            }}
          >
            current position
          </p>
          <Table columns={["Asset",
          "TVL",
          "Position",
          "% Share"]}>
            {pairs?.map((pair: AllPairInfo) => {
              return Number(pair.userSupply.totalLP) > 0 ? (
                <Row
                  key={pair.basePairInfo.address}
                  iconLeft={pair.basePairInfo.token1.icon}
                  iconRight={pair.basePairInfo.token2.icon}
                  onClick={() => {
                    setActivePair(pair)
                    setModalType( Number(pair.userSupply.totalLP) > 0 ? ModalType.ADD_OR_REMOVE : ModalType.ADD)
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
          </Table>
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
          <Table columns={["Asset",
          "TVL",
          "Position",
          "% Share"]}>
            {pairs?.map((pair: AllPairInfo) => {
              return Number(pair.userSupply.totalLP) > 0 ? null : (
                <Row
                  key={pair.basePairInfo.address}
                  iconLeft={pair.basePairInfo.token1.icon}
                  iconRight={pair.basePairInfo.token2.icon}
                  onClick={() => {
                    setActivePair(pair)
                    setModalType( Number(pair.userSupply.totalLP) > 0 ? ModalType.ADD_OR_REMOVE : ModalType.ADD)
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
          </Table>
        </div>
      ) : null}
    </Container>
  );
};
export default Dex;
