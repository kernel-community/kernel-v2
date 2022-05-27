import { useEffect, useState } from 'react'
import { useContractRead, useContractWrite, useProvider } from 'wagmi'
import { addresses, abis } from './constants'

import { useNotifications } from '@src/modules/notifications/context'

export const KERNEL_COURSE_ID = '0'

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

export const useIsRegistered = (learner) => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  if (learner) {
    return useContractRead(
      {
        addressOrName: addresses(chainId).deSchool,
        contractInterface: abis.deSchool,
      },
      'verify',
      {
        args: [learner, KERNEL_COURSE_ID],
        onError: (error) =>
          queueNotification(
            'error',
            "Couldn't fetch registration status",
            error.message
          ),
      }
    )
  } else {
    return {}
  }
}

export const useHasStakeInCourse = () => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  return useContractRead(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'isDeployed',
    {
      args: KERNEL_COURSE_ID,
      onError: (error) =>
        queueNotification(
          'error',
          "Couldn't fetch deposit status",
          error.message
        ),
    }
  )
}

export const useGetBlockRegistered = (learner) => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  return useContractRead(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'isDeployed',
    {
      args: [learner, KERNEL_COURSE_ID],
      onError: (error) =>
        queueNotification(
          `Couldn't fetch block registered: ${error.message}`,
          'error'
        ),
    }
  )
}

export const useGetCourseLength = () => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  const { data } = useContractRead(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'isDeployed',
    {
      args: KERNEL_COURSE_ID,
      onError: (error) =>
        queueNotification(
          'error',
          "Couldn't fetch course length",
          error.message
        ),
    }
  )

  return data ? data[1] : 0
}

export const useRedeemDeposit = () => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  return useContractWrite(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'redeem',
    {
      onError: (error) =>
        queueNotification('error', 'Redemption failed', error.message),
    }
  )
}

export const useGetDaiNonce = (learner) => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  if (learner) {
    return useContractRead(
      {
        addressOrName: addresses(chainId).dai,
        contractInterface: abis.dai,
      },
      'nonces',
      {
        args: learner,
        onError: (error) =>
          queueNotification('error', "Couldn't fetch DAI nonce", error.message),
      }
    )
  } else {
    return {}
  }
}

export const useIsScholarshipAvailable = () => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  return useContractRead(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'scholarshipAvailable',
    {
      args: KERNEL_COURSE_ID,
      onError: (error) =>
        queueNotification(
          'error',
          "Couldn't fetch scholarships",
          error.message
        ),
    }
  )
}

export const useRegisterScholar = () => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  return useContractWrite(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'registerScholar',
    {
      args: KERNEL_COURSE_ID,
      onError: (error) =>
        queueNotification('error', 'Registration failed', error.message),
    }
  )
}

export const usePermitAndRegister = () => {
  const chainId = useGetChainId()
  const { queueNotification } = useNotifications()

  return useContractWrite(
    {
      addressOrName: addresses(chainId).deSchool,
      contractInterface: abis.deSchool,
    },
    'permitAndRegister',
    {
      overrides: { gasLimit: 200000 },
      onError: (error) =>
        queueNotification('error', 'Registration failed', error.message),
    }
  )
}
