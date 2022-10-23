/** @jsx jsx */
/* eslint-disable no-unused-vars */
import { Children, Fragment } from 'react'
import { jsx, Flex } from 'theme-ui'
import { motion } from 'framer-motion'

const Card = ({
  index,
  revealCallback,
  isActive,
  wasActive,
  isRevealed,
  children,
  currentCard,
}) => {
  const _children = Children.toArray(children)

  const cardVariants = {
    initial: { y: 10 * (index - currentCard), opacity: 1 },
    active: { y: 0, opacity: 1 },
    exit: { y: -64, opacity: 0, scale: 1.1 },
  }

  if (_children.length < 2) {
    return (
      <Flex
        sx={{
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
        }}>
        <Flex
          sx={{
            p: 3,
            fontSize: 5,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            flex: '1 1 auto',
          }}>
          ERROR! Incorrect # of Children for Card. Please check your mdx.
        </Flex>
      </Flex>
    )
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

  const question = _children[0]

  const answer = _children[1]

  const postAnswer = _children.slice(2, _children.length)
  const currentVariant = isActive ? 'active' : wasActive ? 'exit' : 'initial'
  const inactiveScale = 1 - 0.05 * (index - currentCard)

  return (
    <motion.div variants={cardVariants} animate={currentVariant}>
      <Flex
        sx={{
          width: ['100%', '343px', '343px'],
          height: ['58vh', '439px', '439px'],
          borderRadius: 7,
          bg: 'backgroundAlt',
          color: 'onBackgroundAlt',
          display: index - currentCard > 2 ? 'none' : 'flex',
          opacity: inactiveScale,
          flexDirection: 'column',
          overflow: 'hidden',
          transform: `scale(${isActive ? '1' : inactiveScale})`,
          transformOrigin: 'bottom',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        }}>
        {isActive && (
          <Fragment>
            <Flex
              sx={{
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                flex: '1 1 auto',
                p: [1, 2, 3],
                fontSize: [2, 3, 4],
              }}>
              {question}
            </Flex>
            <Flex
              sx={{
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
              }}
              onClick={revealCallback}>
              <div
                sx={{
                  position: 'absolute',
                  boxShadow: '0px 0 10px rgba(0,0,0,0.3)',
                  top: '-13px',
                  height: '13px',
                  width: '100%',
                }}></div>
              <motion.div
                variants={revealCopyVariant}
                initial="initial"
                animate={isRevealed ? 'revealed' : 'initial'}
                sx={{ position: 'absolute' }}>
                <span
                  className="reveal-answer"
                  sx={{
                    fontSize: [3, 4, 4],
                    mb: 2,
                    fontWeight: 'bold',
                    transform: 'scale(1)',
                    transition: 'all .2s ease',
                  }}>
                  {' '}
                  Reveal reminder
                </span>
              </motion.div>
              <motion.div
                variants={answerCopyVariant}
                initial="initial"
                animate={isRevealed ? 'revealed' : 'initial'}
                sx={{
                  overflow: 'auto',
                  '& > *:first-child': {
                    fontSize: [3, 4, 4],
                    textAlign: 'center',
                    fontWeight: 'bold',
                    opacity: isRevealed ? 0.8 : 1,
                    filter: isRevealed ? 'blur(0px)' : 'blur(4px)',
                    transition: 'all .2s ease',
                  },
                }}>
                {answer}
                {_children.length > 2 && (
                  <motion.div
                    sx={{ fontSize: '12px', mt: 2 }}
                    variants={postAnswerVariant}
                    initial="initial"
                    animate={isRevealed ? 'revealed' : 'initial'}>
                    {postAnswer}
                  </motion.div>
                )}
              </motion.div>
            </Flex>
          </Fragment>
        )}
      </Flex>
    </motion.div>
  )
}

export default Card
