import { allChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { providers } from 'ethers'

const infuraId = process.env.INFURA_ID

export const connectors = () => [
  new InjectedConnector({ allChains }),
]

export const Connector = {
  INJECTED: 0,
}

export const provider = ({ chainId }) => {
  if (chainId === 1337) {
    return new providers.JsonRpcProvider('http://localhost:8545')
  }
  return new providers.InfuraProvider(chainId, infuraId)
}

export const connectorStorageKey = 'kernel.community.wallet'
