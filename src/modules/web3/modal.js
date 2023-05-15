import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Flex, Text, Box, Button } from 'theme-ui'
import { Icon } from '@makerdao/dai-ui-icons'
import { useHonourProposal } from '../../honour/contracts'
import { apiUrl, graphUrl } from '../../honour/constants'

const Web3 = ({ setIsVisible }) => {
  const { data: account } = useAccount()
  const { write: honourProposal } = useHonourProposal(proposalId)

  const handleDimissModal = () => {
    setIsVisible(false);
  };

  const [proposalId, setProposalId] = useState();
  const [askSuccess, setAskSuccess] = useState(false);
  
  // have the api propose HON as soon as the modal is visible
  const handleOnClickAsk = async () => {
    try {
      const response = await axios.post(apiUrl, null, {
        headers: {
          amount: 1,
          address: account.address
        }
      })
      if (response.status === 200) {
        setAskSuccess(true)
      } else {
        console.error('Error proposing HON tokens', response)
      }
    } catch (error) {
      console.error('Error fetching proposal ID:', error)
    }
  }

  const getProposalId = async () => {
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
          account: account.address,
        },
      });

      const { data } = response.data;
      const proposal = data.proposeds[0] // We only want to honour the first proposal
      if (proposal) {
        setProposalId(proposal.proposalId)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleOnClickHonour = async () => {
    await getProposalId()
    honourProposal(proposalId)
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
          : 'HON is consensual. Ask for some, we\'ll prepare it, then you can accept it.'}
      </Text>
      </Flex>
      <Flex sx={styles.CTAContainer}>
      {askSuccess ?
        <Button onClick={handleOnClickHonour} sx={styles.honourButton}>
          Honour
        </Button>
      :
        <Button onClick={handleOnClickHonour} sx={styles.honourButton}>
          Ask
        </Button>
      }
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
    margin: '0 auto',
  },
  stakeAmountText: {
    margin: 'auto',
    color: '#8C65F7',
    fontSize: '48px',
    fontWeight: 'medium',
  },
}

export default Web3
