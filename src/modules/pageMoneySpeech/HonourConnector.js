/** @jsx jsx */

import { jsx } from 'theme-ui'

import { ethers } from 'ethers'
import { useHasHonour } from '@src/honour/contracts'
import Content from './Content'
import HonourButton from './HonourButton'

const HonourConnector = ({ address }) => {
  const { data: hasHonour, isLoading } = useHasHonour(address)

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    const bal = ethers.utils.formatEther(hasHonour)
    return (
      <div>
        {bal !== '0.0' ? <Content balance={bal} /> : <HonourButton />}
      </div>
    )
  }
}

export default HonourConnector
