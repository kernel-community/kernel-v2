import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Flex, Text, Box, Button, Spinner } from 'theme-ui'
import { Icon } from '@makerdao/dai-ui-icons'
import { useNotifications } from '@src/modules/notifications/context'
import { useContract, useAddress } from '@thirdweb-dev/react'
import { proposer, apiUrl, graphUrl, goerli, abi } from './constants'

const HonModal = ({ setIsVisible, onTransactionSuccess }) => {
  const address = useAddress()
  const contractAddress = goerli
  const { contract } = useContract(contractAddress, abi.honour)
  const { queueNotification } = useNotifications()

  const handleDimissModal = () => {
    setIsVisible(false)
  }

  const [askSuccess, setAskSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // have the api propose HON as soon as the modal is visible
  const handleOnClickAsk = async () => {
    setLoading(true)
    try {
      const response = await axios.post(apiUrl, null, {
        headers: {
          amount: 1,
          address: address,
        },
      })
      if (response.status === 200) {
        setAskSuccess(true)
        getProposalId() // we do this here because it always fails the first time...
        setLoading(false)
      } else {
        queueNotification(
          'error',
          "We can't prepare HON for you right now. Please try again later"
        )
        setLoading(false)
      }
    } catch (error) {
      queueNotification(
        'error',
        "We can't prepare HON for you right now. Please try again later"
      )
      setLoading(false)
      handleDimissModal()
    }
  }

  const getProposalId = async () => {
    let proposalId = null
    let retryCount = 0
    const maxRetries = 5
    const retryDelay = 5000

    while (!proposalId && retryCount < maxRetries) {
      try {
        const response = await axios.post(graphUrl, {
          query: `
            query GetProposals($account: Bytes!) {
              proposeds(where: { receiver: $account }) {
                id
                proposer
                proposalId
              }
            }
          `,
          variables: {
            account: address,
          },
        })

        const { data } = response.data
        const proposals = data.proposeds
        if (proposals && proposals.length > 0) {
          const proposal = proposals[0]
          proposalId = proposal.proposalId
        }
      } catch (error) {
        queueNotification(
          'error',
          'There was an error. Please try again later.'
        )
      }

      if (!proposalId) {
        retryCount++
        await new Promise((resolve) => setTimeout(resolve, retryDelay))
      }
    }

    if (!proposalId) {
      queueNotification('error', 'There was an error. Please try again later.')
    }

    return proposalId
  }

  const handleOnClickHonour = async () => {
    setLoading(true)
    const proposalId = await getProposalId()
    try {
      await contract.call('honour', [proposer, proposalId])
      setLoading(false)
      onTransactionSuccess()
    } catch (error) {
      queueNotification('error', 'There was an error. Please try again later.')
      setLoading(false)
      handleDimissModal()
    }
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
          {askSuccess
            ? 'You can now click the button below to accept your new HON tokens.'
            : "HON is consensual. Ask for some, we'll prepare it, then you can accept it."}
        </Text>
      </Flex>
      <Flex sx={styles.CTAContainer}>
        {askSuccess ? (
          <Button onClick={handleOnClickHonour} sx={styles.honourButton}>
            {loading ? <Spinner sx={styles.spinner} /> : <span>Honour</span>}
          </Button>
        ) : (
          <Button onClick={handleOnClickAsk} sx={styles.honourButton}>
            {loading ? <Spinner sx={styles.spinner} /> : <span>Ask</span>}
          </Button>
        )}
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
  spinner: {
    color: '#fff',
  },
  honourButton: {
    borderRadius: '4px',
    fontWeight: 'bold',
    margin: '0 auto',
  },
  stakeAmountText: {
    margin: 'auto',
    color: '#8C65F7',
    fontSize: '48px',
    fontWeight: 'medium',
  },
}

export default HonModal
