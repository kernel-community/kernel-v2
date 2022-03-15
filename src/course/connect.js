import {defaultChains, defaultL2Chains} from 'wagmi';
import {InjectedConnector} from 'wagmi/connectors/injected';
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect';
import {providers} from 'ethers';

const infuraId = process.env.INFURA_ID;
const chains = [...defaultChains, ...defaultL2Chains];
export const connectors = () => [
  new InjectedConnector({chains}),
  new WalletConnectConnector({
    chains,
    options: {
      infuraId,
      qrcode: true
    }
  })
];

export const Connector = {
  INJECTED: 0,
  WALLETCONNECT: 1
};

export const provider = ({chainId}) =>
  new providers.InfuraProvider(chainId, infuraId);

export const connectorStorageKey = 'kernel.community.wallet';
