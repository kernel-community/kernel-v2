/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect, useBlockNumber } from 'wagmi'
import { useEffect, useState } from 'react'

import { Button as Web3Button } from '@src/modules/web3'
import { Connector } from '@src/course/connect'
import {
  useGetBlockRegistered,
  useGetCourseLength,
  useRedeemDeposit,
} from '@src/course/contracts'

const isRedemptionTime = (currentBlockNumber, redemptionBlockNumber) => {
  return currentBlockNumber >= redemptionBlockNumber
}

const getTimeUntilRedemptionText = (
  currentBlockNumber,
  redemptionBlockNumber
) => {
  if (!redemptionBlockNumber || redemptionBlockNumber === 0) {
    return 'No deposit found for the current address'
  } else if (isRedemptionTime(currentBlockNumber, redemptionBlockNumber)) {
    return 'You can redeem your deposit now'
  } else {
    const averageBlockTimeInDays = 14 / 60 / 60 / 24
    const daysUntilRedemption =
      (redemptionBlockNumber - currentBlockNumber) * averageBlockTimeInDays

    if (daysUntilRedemption <= 1) {
      return `You can redeem your deposit today at block number ${redemptionBlockNumber}`
    } else {
      const roundedDays = Math.round(daysUntilRedemption)
      const dayText = roundedDays == 1 ? 'day' : 'days'
      return `You can redeem your deposit in ${roundedDays} ${dayText} at block number ${redemptionBlockNumber}`
    }
  }
}

const RedemptionDetails = ({ address }) => {
  const { write: redeemDeposit } = useRedeemDeposit()
  const { data: currentBlockNumber } = useBlockNumber({ watch: true })
  const { connectors } = useConnect()

  const [connector] = useState(connectors[Connector.INJECTED])
  const [canRedeemDeposit, setCanRedeemDeposit] = useState(false)

  const { data: blockRegistered } = useGetBlockRegistered(address)
  const courseLength = useGetCourseLength()

  const redemptionBlockNumber = blockRegistered + courseLength
  const timeUntilRedemptionText = getTimeUntilRedemptionText(
    currentBlockNumber,
    redemptionBlockNumber
  )

  useEffect(() => {
    if (currentBlockNumber && blockRegistered) {
      setCanRedeemDeposit(
        isRedemptionTime(currentBlockNumber, redemptionBlockNumber)
      )
    }
  }, [blockRegistered, currentBlockNumber])

  const handleOnPressRedeem = async () => {
    await redeemDeposit()
  }

  return (
    <Flex sx={styles.container}>
      <p sx={styles.blockNumberText}>Current block: {currentBlockNumber}</p>
      <Web3Button
        descriptionText={timeUntilRedemptionText}
        buttonText="Redeem"
        isDisabled={!connector.ready || !canRedeemDeposit}
        onClickButton={handleOnPressRedeem}
      />
    </Flex>
  )
}

const styles = {
  container: {
    flexDirection: 'column',
  },
  blockNumberText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginX: 'auto',
  },
}

export default RedemptionDetails
