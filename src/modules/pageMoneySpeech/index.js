/** @jsx jsx */

import { Flex, jsx, Text } from 'theme-ui'
import { useAddress } from '@thirdweb-dev/react'
import { Heading } from '@modules/ui/heading'
import { Link } from '@modules/navigation'
import ConnectButton from './ConnectButton'
import HonourConnector from './HonourConnector'

const PageMoneySpeech = () => {
  const address = useAddress()

  return (
    <Flex sx={styles.container}>
      <Heading level={1} sx={styles.heading}>
        💸 Money and Speech
      </Heading>
      <Text>
        This is a special post. Rather than talk about how blockchains can merge
        money and speech in proscial ways, we will illustrate it.
      </Text>
      <Text>
        We ask that you take on a very particular kind of token we have designed
        in order to read the contents of this lesson. The token is called &quot;
        <Link sx={styles.learnMoreCTA} to={'/tokens/token-studies/honour'}>
          Honour
        </Link>
        &quot; (or HON), and it represents <b>obligations</b>, rather than
        assets. Learning about creative approaches to the kinds of programmable
        currencies we can create together really matters, because we can
        literally make money in ways which benefit the people we each care
        about.
      </Text>
      {address ? <HonourConnector address={address} /> : <ConnectButton />}
    </Flex>
  )
}

const styles = {
  container: {
    width: '100%',
    flexDirection: 'column',
    padding: ['0 2rem', '0 2rem', '0 5rem'],
  },
  heading: {
    margin: '5rem 0 2rem 0  ',
  },
  learnMoreCTA: {
    color: 'link',
    cursor: 'pointer',
    transition: 'all .16s',
    fontWeight: 400,
    '&:hover': {
      color: 'linkAlt',
    },
  },
}

export default PageMoneySpeech
