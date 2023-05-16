/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useState } from 'react'

import { Button as HonButton, Modal as HonModal } from '@src/modules/web3'

const HonourButton = ({ onTransactionSuccess }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleTransactionSuccess = () => {
    setIsModalVisible(false)
    onTransactionSuccess()
  }

  return (
    <Flex>
      {isModalVisible && (
        <HonModal
          setIsVisible={setIsModalVisible}
          onTransactionSuccess={handleTransactionSuccess}
        />
      )}
      <HonButton
        descriptionText="You don't have any HON tokens"
        buttonText="Get some!"
        onClickButton={() => setIsModalVisible(true)}
      />
    </Flex>
  )
}

export default HonourButton
