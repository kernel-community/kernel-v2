import {BigNumber} from 'ethers';
import {useSignTypedData} from 'wagmi';
import {addresses} from '@src/course/constants';

const types = {
  Permit: [
    {name: 'holder', type: 'address'},
    {name: 'spender', type: 'address'},
    {name: 'nonce', type: 'uint256'},
    {name: 'expiry', type: 'uint256'},
    {name: 'allowed', type: 'bool'}
  ]
};

const useSignPermitTransaction = ({provider, address}) => {
  const [, signMessage] = useSignTypedData();

  return async ({nonce, expiry}) => {
    const {chainId} = await provider.getNetwork();

    const domain = {
      name: 'Dai Stablecoin',
      version: '1',
      chainId,
      verifyingContract: addresses(chainId).dai
    };
    const value = {
      holder: address,
      spender: addresses(chainId).deSchool,
      nonce: BigNumber.from(nonce),
      expiry: BigNumber.from(expiry),
      allowed: true
    };

    const {data: message} = await signMessage({
      domain,
      types,
      value
    });

    const signature = message.substring(2);
    const r = '0x' + signature.substring(0, 64);
    const s = '0x' + signature.substring(64, 128);
    const v = parseInt(signature.substring(128, 130), 16);

    return {v, r, s};
  };
};

export default useSignPermitTransaction;
