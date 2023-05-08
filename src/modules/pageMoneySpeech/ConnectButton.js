/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect } from 'wagmi'
import { useState } from 'react'

import { Button as Web3Button } from '@src/modules/web3'
import { Connector } from '@src/honour/connect'

const ConnectButton = () => {
  const { connect, connectors } = useConnect()
  const [connector] = useState(connectors[Connector.INJECTED])

  return (
    <Flex>
      <Web3Button
        descriptionText="You will need a wallet to continue"
        buttonText="Connect"
        isDisabled={!connector.ready}
        onClickButton={() => {
          connect(connector)
        }}
      />
    </Flex>
  )
}

export default ConnectButton
