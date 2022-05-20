/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect } from 'wagmi'

import { Heading } from '@modules/ui/heading'
import { ConnectButton, RedemptionConnector } from '@src/modules/redemptionPage'

const RedeemPage = () => {
  const { isConnected } = useConnect()

  return (
    <Flex sx={styles.container}>
      <Heading level={1}>Redeem</Heading>
      {isConnected && <RedemptionConnector />}
      {!isConnected && <ConnectButton />}
    </Flex>
  )
}

const styles = {
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}

export default RedeemPage
