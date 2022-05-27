/** @jsx jsx */
import { Children, Fragment, useState, useEffect } from 'react'
import { jsx, Flex } from 'theme-ui'
import { useConnect, useAccount } from 'wagmi'
import { motion } from 'framer-motion'
import { Connector } from '@src/course/connect'
import { useIsRegistered } from '@src/course/contracts'
import { Modal as Web3Modal, Button as Web3Button } from '@src/modules/web3'
import { useNotifications } from '@src/modules/notifications/context'

const Card = ({
  children,
  currentCard,
  index,
  isActive,
  isRevealed,
  revealCallback,
  wasActive,
}) => {
  const { queueNotification } = useNotifications()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: accountData } = useAccount()
  const { data: isRegistered } = useIsRegistered(accountData?.address)

  const { connect, connectors, isConnected } = useConnect({
    onConnect: () => {
      setIsModalVisible(!isRegistered)
      queueNotification('success', 'Connected!')
    },
    onError: (error) =>
      queueNotification('error', 'Error conncecting wallet', error.message),
  })

  const [connector, setConnector] = useState(connectors[Connector.INJECTED])

  useEffect(() => {
    setConnector(connector)
  }, [isConnected])

  const cardVariants = {
    initial: { y: 10 * (index - currentCard), opacity: 1 },
    active: { y: 0, opacity: 1 },
    exit: { y: -64, opacity: 0, scale: 1.1 },
  }

  const revealCopyVariant = {
    revealed: { opacity: 0, y: 12, transition: { duration: 0.2 } },
    initial: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  }

  const answerCopyVariant = {
    revealed: { y: 0 },
    initial: { y: 48 },
  }

  const postAnswerVariant = {
    revealed: { opacity: 1 },
    initial: { opacity: 0 },
  }

  const currentVariant = isActive ? 'active' : wasActive ? 'exit' : 'initial'
  const inactiveScale = 1 - 0.05 * (index - currentCard)

  const cardContainerStyle = {
    ...styles.cardContainer,
    display: index - currentCard > 2 ? 'none' : 'flex',
    opacity: inactiveScale,
    transform: `scale(${isActive ? '1' : inactiveScale})`,
  }

  const answerTextStyle = {
    ...styles.answerText,
    opacity: isRevealed ? 0.8 : 1,
    filter: isRevealed ? 'blur(0px)' : 'blur(4px)',
  }

  const revealAnimateState = isRevealed ? 'revealed' : 'initial'

  const _children = Children.toArray(children)
  const question = _children[0]
  const answer = _children[1]
  const postAnswer = _children.slice(2, _children.length)

  if (_children.length < 2) {
    return (
      <Flex sx={styles.errorContainer}>
        <Flex sx={styles.errorText}>
          ERROR! Incorrect # of Children for Card. Please check your mdx.
        </Flex>
      </Flex>
    )
  }

  return (
    <Fragment>
      {isModalVisible && <Web3Modal setIsVisible={setIsModalVisible} />}
      <motion.div variants={cardVariants} animate={currentVariant}>
        <Flex sx={cardContainerStyle}>
          {isActive && (
            <Fragment>
              <Flex sx={styles.questionText}>{question}</Flex>
              <Flex sx={styles.answerContainer}>
                <div sx={styles.boxShadow} />
                <motion.div
                  variants={revealCopyVariant}
                  initial="initial"
                  animate={revealAnimateState}
                  sx={{ position: 'absolute' }}>
                  {isConnected && isRegistered && (
                    <Flex onClick={revealCallback}>
                      <span
                        className="reveal-answer"
                        sx={styles.revealAnswerText}>
                        Reveal the Answer
                      </span>
                    </Flex>
                  )}
                  {isConnected && !isRegistered && (
                    <Web3Button
                      descriptionText="Register to reveal"
                      buttonText="Register"
                      isDisabled={!connector.ready}
                      onClickButton={() => setIsModalVisible(true)}
                    />
                  )}
                  {!isConnected && (
                    <Web3Button
                      descriptionText="Connect wallet to reveal"
                      buttonText="Metamask"
                      isDisabled={!connector.ready}
                      onClickButton={() => {
                        connect(connector)
                      }}
                    />
                  )}
                </motion.div>
                {isConnected && isRegistered && (
                  <motion.div
                    variants={answerCopyVariant}
                    initial="initial"
                    animate={revealAnimateState}
                    sx={answerTextStyle}>
                    {answer}
                    {_children.length > 2 && (
                      <motion.div
                        sx={{ fontSize: '12px', mt: 2 }}
                        variants={postAnswerVariant}
                        initial="initial"
                        animate={revealAnimateState}>
                        {postAnswer}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </Flex>
            </Fragment>
          )}
        </Flex>
      </motion.div>
    </Fragment>
  )
}

const styles = {
  answerContainer: {
    height: '38%',
    bg: 'primaryMuted',
    borderTop: '1px solid',
    borderColor: 'background',
    position: 'relative',
    color: 'text',
    px: 2,
    pt: '20px',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexDirection: 'column',
    '&:hover .reveal-answer': {
      transition: 'all .2s ease',
      transform: 'scale(1.1)',
    },
  },
  answerText: {
    overflow: 'auto',
    '& > *:first-child': {
      fontSize: [3, 4, 4],
      textAlign: 'center',
      fontWeight: 'bold',
      transition: 'all .2s ease',
    },
  },
  boxShadow: {
    position: 'absolute',
    boxShadow: '0px 0 10px rgba(0,0,0,0.3)',
    top: '-13px',
    height: '13px',
    width: '100%',
  },
  cardContainer: {
    width: ['100%', '343px', '343px'],
    height: ['58vh', '439px', '439px'],
    borderRadius: 7,
    bg: 'backgroundAlt',
    color: 'onBackgroundAlt',
    flexDirection: 'column',
    overflow: 'hidden',
    transformOrigin: 'bottom',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
  connectError: {
    textAlign: 'center',
  },
  connectText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginX: 'auto',
  },
  errorContainer: {
    width: '343px',
    height: '439px',
    borderRadius: 7,
    bg: 'error',
    color: 'onBackgroundAlt',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
  errorText: {
    p: 3,
    fontSize: 5,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: '1 1 auto',
  },
  revealAnswerText: {
    fontSize: [3, 4, 4],
    mb: 2,
    fontWeight: 'bold',
    transform: 'scale(1)',
    transition: 'all .2s ease',
  },
  questionText: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: '1 1 auto',
    p: [1, 2, 3],
    fontSize: [2, 3, 4],
  },
}

export default Card
