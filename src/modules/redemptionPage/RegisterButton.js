/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect } from 'wagmi'
import { useState } from 'react'

import { Button as Web3Button, Modal as Web3Modal } from '@src/modules/web3'
import { Connector } from '@src/course/connect'

const RegisterButton = () => {
  const { connectors } = useConnect()
  const [connector] = useState(connectors[Connector.INJECTED])
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Flex>
      {isModalVisible && <Web3Modal setIsVisible={setIsModalVisible} />}
      <Web3Button
        descriptionText="You don't have any deposits in the course"
        buttonText="Register"
        isDisabled={!connector.ready}
        onClickButton={() => setIsModalVisible(true)}
      />
    </Flex>
  )
}

export default RegisterButton
