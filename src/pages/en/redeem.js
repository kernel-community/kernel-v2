/** @jsx jsx */

import { Flex, jsx } from 'theme-ui'
import { useConnect, useAccount } from 'wagmi'

import { Heading } from '@modules/ui/heading'
import { ConnectButton, RedemptionConnector } from '@src/modules/redemptionPage'

const RedeemPage = () => {
  const { isConnected } = useConnect()
  const { data: accountData } = useAccount()

  return (
    <Flex sx={styles.container}>
      <Heading level={1}>Redeem</Heading>
      {isConnected && <RedemptionConnector address={accountData?.address} />}
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
