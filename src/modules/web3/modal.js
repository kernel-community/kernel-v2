import React, { useState, useEffect } from 'react'
import { useAccount, useProvider, useSigner } from 'wagmi'
import { Flex, Text, Box, Button } from 'theme-ui'
import { add, getUnixTime } from 'date-fns'
import { useSignPermitTransaction } from '../../hooks'
import {
  getDaiNonce,
  getScholarshipAvailable,
  permitAndRegister,
  registerScholar,
} from '@src/course/contracts'
import { Icon } from '@makerdao/dai-ui-icons'

const Web3 = ({ setIsVisible }) => {
  const provider = useProvider()
  const { data: accountData } = useAccount()
  const { data: signer } = useSigner()
  const signTransaction = useSignPermitTransaction({
    provider,
    address: accountData?.address,
  })

  const [scholarshipAvailable, setIsScholarshipAvailable] = useState(false)

  useEffect(() => {
    const fetchScholarshipStatus = async () => {
      setIsScholarshipAvailable(await getScholarshipAvailable(provider))
    }

    if (accountData?.address && provider) {
      fetchScholarshipStatus()
    }
  }, [accountData?.address, provider])

  const handleDimissModal = () => {
    setIsVisible(false)
  }

  const handleDAIPermitAndRegister = async () => {
    const expirationTime = add(new Date(), { minutes: 30 })
    const expiry = getUnixTime(expirationTime)
    const nonce = await getDaiNonce(accountData?.address, provider)

    const { v, r, s } = await signTransaction({
      nonce,
      expiry,
    })

    await permitAndRegister(signer, nonce, expiry, v, r, s)
  }

  const handleOnClickRegister = async () => {
    if (scholarshipAvailable) {
      await registerScholar(signer)
    } else {
      await handleDAIPermitAndRegister()
    }

    handleDimissModal()
  }

  if (accountData) {
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
            To reveal the answer, you need to register for our course.
          </Text>

          {scholarshipAvailable && (
            <>
              <Text sx={styles.descriptionText}>
                There are currently scholarships available. <br /> <br />
                Instead of having to make a deposit before registering for the
                course, you may register for the scholarship instead
              </Text>
              <div style={{ height: '50px' }} />
            </>
          )}

          {!scholarshipAvailable && (
            <>
              <Flex sx={{ flexDirection: 'column' }}>
                <Text sx={styles.descriptionText}>
                  You can do this by staking
                </Text>
                <Text sx={styles.stakeAmountText}>100 DAI</Text>
              </Flex>
              <Text sx={styles.descriptionText}>
                You can claim this DAI back after{' '}
                <Text sx={{ fontWeight: 'bold' }}>two months</Text>. You{' '}
                <Text sx={{ fontWeight: 'bold' }}>learn for free</Text> and we
                use the yield to keep the lights on.
              </Text>
            </>
          )}
        </Flex>
        <Flex sx={styles.CTAContainer}>
          <Text sx={styles.learnMoreCTA}>Learn More.</Text>
          <Button onClick={handleOnClickRegister} sx={styles.registerButton}>
            Register
          </Button>
        </Flex>
      </Box>
    )
  } else {
    return null
  }
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
  learnMoreCTA: {
    color: '#fff',
    textDecoration: 'underline',
    justifySelf: 'end',
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
  registerButton: {
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  stakeAmountText: {
    margin: 'auto',
    color: '#8C65F7',
    fontSize: '48px',
    fontWeight: 'medium',
  },
}

export default Web3
