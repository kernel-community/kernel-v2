/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect, useAccount } from 'wagmi'

import { Heading } from '@modules/ui/heading'
import { Link } from '@modules/navigation'
import { Pager } from '@modules/navigation/Pager'
import { ConnectButton, HonourConnector } from '@src/modules/pageMoneySpeech'

const PageMoneySpeech = () => {
  const { isConnected } = useConnect()
  const { data: accountData } = useAccount()
  const sideNavData = {
    items: [
      {
        slugPart: 'learn',
        title: 'Learn',
        items: [
          {
            slugPart: 'module-2',
            title: 'Module 2',
            items: [
              {
                slugPart: 'better-questions',
                url: '/en/learn/module-2/better-questions',
                items: [],
                title: '⁉️ Ask',
                order: 1,
              },
              {
                slugPart: 'money-speech',
                url: '/en/learn/module-2/money-speech',
                items: [],
                title: '💸 Speak',
                order: 2,
              },
              {
                slugPart: 'shelling-out',
                url: '/en/learn/module-2/shelling-out',
                items: [],
                title: 'Collecting',
                order: 3,
              },
            ],
          },
        ],
        url: '/en/learn',
      },
    ],
  }

  return (
    <Flex sx={styles.container}>
      <Heading level={1} sx={styles.heading}>
        💸 Money and Speech
      </Heading>
      <p>
        This is a special post. Rather than talk about how blockchains can merge
        money and speech in proscial ways, we will illustrate it.
      </p>
      <p>
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
      </p>
      <div sx={styles.connector}>
        {isConnected && <HonourConnector address={accountData?.address} />}
        {!isConnected && <ConnectButton />}
      </div>
      <Pager
        sidenavData={sideNavData}
        pagePath={'/en/learn/module-2/money-speech/'}
      />
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
  connector: {
    alignText: 'center',
    width: '100%',
  },
}

export default PageMoneySpeech
