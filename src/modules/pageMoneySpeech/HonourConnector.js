/** @jsx jsx */

import { jsx } from 'theme-ui'

import { useContractRead, useContract } from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import { goerli, abi } from '../web3/constants';

import Content from './Content'
import HonourButton from './HonourButton'

const HonourConnector = ({ address }) => {
    const contractAddress = goerli
    const { contract } = useContract(contractAddress, abi.honour)
    const { data } = useContractRead(
        contract, 
        "balanceOf",
        [address]
    );
    const balance = data ? ethers.utils.formatEther(data) : null
    return (
      <div>{balance && balance !== "0.0" ? <Content balance={balance} /> : <HonourButton />}</div>
    )
}

export default HonourConnector