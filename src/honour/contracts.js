import { useEffect, useState } from 'react'
import { useContractRead, useProvider } from 'wagmi'
import { ethers } from 'ethers'
import { addresses, abis } from './constants'

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
export const useHasHonour = (learner) => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  if (learner) {
    return useContractRead(
      {
        addressOrName: addresses(chainId).honour,
        contractInterface: abis.honour,
      },
      'balanceOf',
      {
        args: [learner],
        onError: (error) =>
          queueNotification(
            'error',
            "Couldn't fetch honour balance",
            error.message
          ),
        select: (data) => ethers.BigNumber.toString()
      }
    )
  } else {
    return {}
  }
}