const infuraId = process.env.INFURA_ID;

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

export enum Connector {
  "INJECTED",
  "WALLETCONNECT",
} 