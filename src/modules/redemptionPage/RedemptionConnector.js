/** @jsx jsx */

import { jsx } from 'theme-ui'
import { useAccount, useProvider } from 'wagmi'
import { useEffect, useState } from 'react'

import { hasStakeInCourse } from '@src/course/contracts'
import RegisterButton from './RegisterButton'
import RedemptionDetails from './RedemptionDetails'

const RedemptionConnector = () => {
  const { data: accountData } = useAccount()
  const provider = useProvider()
  const [hasStakeStakeToRedeem, setHasStakeToRedeem] = useState(false)

  useEffect(() => {
    const retrieveAndSetStakeState = async () => {
      const _hasStake = await hasStakeInCourse(provider)
      setHasStakeToRedeem(_hasStake)
    }

    if (accountData?.address && provider) {
      retrieveAndSetStakeState()
    }
  }, [accountData?.address, provider])

  return (
    <div>
      {hasStakeStakeToRedeem && (
        <RedemptionDetails address={accountData?.address} />
      )}
      {!hasStakeStakeToRedeem && <RegisterButton />}
    </div>
  )
}

export default RedemptionConnector
