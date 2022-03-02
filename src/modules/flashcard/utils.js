import { defaultChains, defaultL2Chains } from "wagmi";
import {
  InjectedConnector,
  WalletConnectConnector,
} from "wagmi/connectors/injected";

const infuraId = process.env.INFURA_ID;
const chains = [...defaultChains, ...defaultL2Chains];
export const connectors = () => [
  new InjectedConnector({ chains }),
  new WalletConnectConnector({
    chains,
    options: {
      infuraId,
      qrcode: true,
    },
  }),
];

export const Connector = {
  INJECTED: "INJECTED",
  WALLETCONNECT: "WALLETCONNECT",
};
