/** @jsx jsx */

import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useHasHonour } from '@src/honour/contracts'
import Content from './Content'
import HonourButton from './HonourButton'

const HonourConnector = ({ address }) => {
  const { data: hasHonour, isLoading } = useHasHonour(address)

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    console.log(hasHonour)
    return (
      <div>
        {hasHonour !== '0.0' ? (
          <Content balance={hasHonour} />
        ) : (
          <HonourButton />
        )}
      </div>
    )
  }
}

export default HonourConnector
