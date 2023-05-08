import React from 'react'
import { useEffect, useState } from 'react'
import { Flex, Text, Box, Button } from 'theme-ui'
import { Icon } from '@makerdao/dai-ui-icons'

const Web3 = ({ setIsVisible }) => {
  const handleDimissModal = () => {
    setIsVisible(false)
  }

  // we should useEffect to tell the api the connected address so it can propose HON
  // as soon as the learner opens the modal.

  const handleOnClickHonour = async () => {
    // this should honour the HON just proposed by the api
  }

  return (
    <Box sx={styles.modalOuterContainer}>
      <Flex sx={styles.modalInnerContainer}>
        <Flex sx={styles.dismissIconContainer}>
          <div
            style={styles.dismissIconClickTarget}
            onClick={handleDimissModal}>
            <Icon name="close" className="close" size="20px" />
          </div>
        </Flex>
        <Text sx={styles.descriptionText}>
          Please wait while we prepare some HON tokens for you...
        </Text>
      </Flex>
      <Flex sx={styles.CTAContainer}>
        <Button onClick={handleOnClickHonour} sx={styles.honourButton}>
          Honour
        </Button>
      </Flex>
    </Box>
  )
}

const styles = {
  CTAContainer: {
    width: '471px',
    height: '100px',
    borderBottomRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    backgroundColor: '#343457',
    marginX: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingX: '20px',
  },
  descriptionText: {
    color: '#fff',
    textAlign: 'center',
    marginY: 'auto',
    marginX: '50px',
    fontWeight: 'bold',
  },
  dismissIconContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    marginBottom: '-40px',
  },
  dismissIconClickTarget: {
    cursor: 'pointer',
    padding: '15px',
  },
  modalInnerContainer: {
    width: '471px',
    height: '361px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    backgroundColor: '#212144',
    marginX: 'auto',
    marginTop: '250px',
    flexDirection: 'column',
  },
  modalOuterContainer: {
    backgroundColor: '#47556990',
    backgroundOpacity: 0.5,
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
    backdropFilter: 'blur(10px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  honourButton: {
    borderRadius: '4px',
    fontWeight: 'bold',
    margin: '0 auto'
  },
  stakeAmountText: {
    margin: 'auto',
    color: '#8C65F7',
    fontSize: '48px',
    fontWeight: 'medium',
  },
}

export default Web3