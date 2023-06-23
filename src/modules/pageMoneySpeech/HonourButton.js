/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect } from 'wagmi'
import { useState } from 'react'

import { Button as Web3Button, Modal as Web3Modal } from '@src/modules/web3'
import { Connector } from '@src/honour/connect'

const HonourButton = ({ onTransactionSuccess }) => {
  const { connectors } = useConnect()
  const [connector] = useState(connectors[Connector.INJECTED])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleTransactionSuccess = () => {
    setIsModalVisible(false)
    onTransactionSuccess()
  }

  return (
    <Flex>
      {isModalVisible && (
        <Web3Modal
          setIsVisible={setIsModalVisible}
          onTransactionSuccess={handleTransactionSuccess}
        />
      )}
      <Web3Button
        descriptionText="You don't have any HON tokens"
        buttonText="Get some!"
        isDisabled={!connector.ready}
        onClickButton={() => setIsModalVisible(true)}
      />
    </Flex>
  )
}

export default HonourButton
