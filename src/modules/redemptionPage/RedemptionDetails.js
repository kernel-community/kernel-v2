/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect, useProvider, useBlockNumber, useSigner } from 'wagmi'
import { useEffect, useState } from 'react'

import { Button as Web3Button } from '@src/modules/web3'
import { Connector } from '@src/course/connect'
import {
  getBlockRegistered,
  getCourseLength,
  redeemDeposit,
} from '@src/course/contracts'

const isRedemptionTime = (currentBlockNumber, redemptionBlockNumber) => {
  return currentBlockNumber >= redemptionBlockNumber
}

const getTimeUntilRedemptionText = (
  currentBlockNumber,
  redemptionBlockNumber
) => {
  if (isRedemptionTime(currentBlockNumber, redemptionBlockNumber)) {
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
  const provider = useProvider()
  const { data: signer } = useSigner()
  const { data: currentBlockNumber } = useBlockNumber({ watch: true })
  const { connectors } = useConnect()

  const [connector] = useState(connectors[Connector.INJECTED])
  const [blockRegistered, setBlockRegistered] = useState(0)
  const [courseLength, setCourseLength] = useState(0)
  const [canRedeemDeposit, setCanRedeemDeposit] = useState(false)

  const redemptionBlockNumber = blockRegistered + courseLength
  const timeUntilRedemptionText = getTimeUntilRedemptionText(
    currentBlockNumber,
    redemptionBlockNumber
  )

  useEffect(() => {
    const retrieveBlockRegistered = async () => {
      const blockNumber = await getBlockRegistered(address, provider)
      setBlockRegistered(blockNumber || 0)
    }

    const retrieveCourseLength = async () => {
      const lengthOfCourse = await getCourseLength(provider)
      setCourseLength(lengthOfCourse || 0)
    }

    if (address && provider) {
      retrieveBlockRegistered()
      retrieveCourseLength()
    }
  }, [address, provider])

  useEffect(() => {
    if (currentBlockNumber && blockRegistered) {
      setCanRedeemDeposit(
        isRedemptionTime(currentBlockNumber, redemptionBlockNumber)
      )
    }
  }, [blockRegistered, currentBlockNumber])

  const handleOnPressRedeem = async () => {
    await redeemDeposit(signer)
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
