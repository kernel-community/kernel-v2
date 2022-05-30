/** @jsx jsx */

import { jsx } from 'theme-ui'

import { useHasStakeInCourse } from '@src/course/contracts'
import RegisterButton from './RegisterButton'
import RedemptionDetails from './RedemptionDetails'

const RedemptionConnector = ({ address }) => {
  const { data: hasStakeStakeToRedeem, isLoading } = useHasStakeInCourse()

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {hasStakeStakeToRedeem && <RedemptionDetails address={address} />}
        {!hasStakeStakeToRedeem && <RegisterButton />}
      </div>
    )
  }
}

export default RedemptionConnector
