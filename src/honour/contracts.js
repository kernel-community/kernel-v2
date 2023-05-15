import { useEffect, useState } from 'react'
import { useContractRead, useContractWrite, useProvider } from 'wagmi'
import { ethers } from 'ethers'
import { addresses, abis, proposer } from './constants'

import { useNotifications } from '@src/modules/notifications/context'

const useGetChainId = () => {
  const [chainId, setChainId] = useState()
  const provider = useProvider()

  useEffect(() => {
    const getChainId = async () => {
      const { chainId: id } = await provider.getNetwork()
      setChainId(id)
    }

    getChainId()
  }, [provider])

  return chainId
}

// function to fetch HON balance
export const useHasHonour = (address) => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  if (address) {
    return useContractRead(
      {
        addressOrName: addresses(chainId).honour,
        contractInterface: abis.contract,
      },
      'balanceOf',
      {
        args: [address],
        onError: (error) =>
          queueNotification(
            'error',
            "Couldn't fetch honour balance",
            error.message
          ),
      }
    )
  } else {
    return {}
  }
}

export const useHonourProposal = (id) => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()
  if (id !== undefined) {
    const idBN = ethers.BigNumber.from(id)
    return useContractWrite(
      {
        addressOrName: addresses(chainId).honour,
        contractInterface: abis.contract,
      },
      'honour',
      {
        args: [proposer, idBN],
        onError: (error) =>
          queueNotification(
            'error',
            "Couldn't honour proposal",
            error.message
          ),
      }
    )
  }
}