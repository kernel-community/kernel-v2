/** @jsx jsx */
import { Children } from 'react'
import { jsx, Flex } from 'theme-ui'
import { Icon } from '@makerdao/dai-ui-icons'
import { motion } from 'framer-motion'
import { useImmer } from 'use-immer'
import Card from './card'

const Flash = ({ children }) => {
  const _children = Children.toArray(children)

  const [{ answers, currentCard, completed, cards }, setState] = useImmer({
    answers: [],
    cards: _children,
    currentCard: 0,
    completed: false,
  })

  let isCurrentlyRevealed = answers[currentCard]?.revealed

  const reveal = () => {
    setState((draft) => {
      draft.answers[draft.currentCard] = {
        revealed: true,
      }
    })
  }

  const answer = (remembered) => {
    if (!isCurrentlyRevealed) {
      return
    }

    setState((draft) => {
      draft.answers[draft.currentCard] = {
        ...draft.answers[draft.currentCard],
        remembered,
      }

      // const oldCards = [...draft.cards];

      // oldCards.splice(draft.currentCard, 1);
      // draft.cards = oldCards;

      //This is the last card to answer, complete the session.
      if (currentCard === _children.length - 1) {
        draft.completed = true
      } else {
        //This isn't the last card, increment.
        draft.currentCard += 1
      }
    })
  }

  const answerVariants = {
    inactive: { opacity: 0.5, y: 10 },
    active: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    completed: { opacity: 0, y: 20 },
  }

  return (
    <Flex
      sx={{
        minHeight: '400px',
        mb: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div sx={{ position: 'relative', width: ['100%', '100%', 'initial'] }}>
        {cards.length > 0 && !completed && (
          <motion.div
            sx={{
              width: ['100%', '343px', '343px'],
              mb: [4, 4, 4],
              height: ['58vh', '439px', '439px'],
              position: 'relative',
            }}>
            {cards.map(({ props }, index) => (
              <motion.div
                key={`flash-card-${index}`}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  zIndex: _children.length - index,
                  pointerEvents: currentCard === index ? 'all' : 'none',
                }}>
                <Card
                  index={index}
                  answerCallback={answer}
                  revealCallback={reveal}
                  isActive={currentCard === index}
                  wasActive={currentCard > index}
                  currentCard={currentCard}
                  isRevealed={answers[index]?.revealed}
                  {...props}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
        {completed && (
          <motion.div
            key={'review_complete'}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'textMuted',
            }}>
            <Icon name="checkmark" size={5} />
            <h2>Review complete</h2>
          </motion.div>
        )}
        <motion.div
          variants={answerVariants}
          initial="inactive"
          animate={
            completed
              ? 'completed'
              : isCurrentlyRevealed
              ? 'active'
              : 'inactive'
          }
          sx={{ position: completed ? 'absolute' : 'initial' }}>
          <Flex
            sx={{
              color: 'flashText',
              fontWeight: '600',
              flexDirection: ['column', 'row', 'row'],
            }}>
            <Flex
              onClick={() => answer(false)}
              sx={{
                flex: 1,
                borderRadius: 6,
                p: '8px',
                bg: 'primary',
                mr: [0, 3, 3],
                mb: [3, 0, 0],
                cursor: isCurrentlyRevealed ? 'pointer' : 'not-allowed',
                alignItems: 'center',
                fontSize: ['16px', '14px', '14px'],
                justifyContent: ['center', 'space-around', 'space-around'],
                transition: 'all .2s ease',
                '&:hover': isCurrentlyRevealed
                  ? {
                      bg: 'primaryMuted',
                    }
                  : {},
              }}>
              <Icon size={'28px'} name="refresh" sx={{ mr: [3, 0, 0] }} />{' '}
              Didn&apos;t remember
            </Flex>
            <Flex
              onClick={() => answer(true)}
              sx={{
                flex: 1,
                borderRadius: 6,
                p: '8px',
                bg: 'primary',
                cursor: isCurrentlyRevealed ? 'pointer' : 'not-allowed',
                alignItems: 'center',
                fontSize: ['16px', '14px', '14px'],
                justifyContent: ['center', 'space-around', 'space-around'],
                transition: 'all .2s ease',
                '&:hover': isCurrentlyRevealed
                  ? {
                      bg: 'primaryMuted',
                    }
                  : {},
              }}>
              <Icon size={'22px'} name="checkmark" sx={{ mr: [3, 0, 0] }} />
              Remembered
            </Flex>
          </Flex>
        </motion.div>
      </div>
    </Flex>
  )
}

export default Flash