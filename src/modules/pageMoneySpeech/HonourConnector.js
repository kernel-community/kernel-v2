/** @jsx jsx */

import { jsx } from 'theme-ui'
import { useState } from 'react'
import { ethers } from 'ethers'
import { useContractRead } from 'wagmi'
import { goerli, abis } from '../../honour/constants'
import Content from './Content'
import HonourButton from './HonourButton'

const HonourConnector = ({ address }) => {
  const [transactionSuccess, setTransactionSuccess] = useState(false)
  const { data } = useContractRead(
    {
      addressOrName: goerli,
      contractInterface: abis.honour,
    },
    'balanceOf',
    {
      args: [address],
    }
  )
  const balance = data ? ethers.utils.formatEther(data) : null

  const handleTransactionSuccess = () => {
    setTransactionSuccess(true)
  }
  return (
    <div>
      {transactionSuccess ? (
        <Content balance={balance} />
      ) : balance && balance !== '0.0' ? (
        <Content balance={balance} />
      ) : (
        <HonourButton onTransactionSuccess={handleTransactionSuccess} />
      )}
    </div>
  )
}

export default HonourConnector
