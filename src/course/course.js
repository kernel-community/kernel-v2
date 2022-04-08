import {BigNumber, Contract} from 'ethers';
import {Constants} from './constants';

const KERNEL_COURSE_ID = '0';

const KernelFactory = {
  address: Constants.KernelFactoryContractAddress,
  abi: Constants.KernelFactoryAbi
};

const DaiContract = {
  address: Constants.DaiContractAddress,
  abi: ['function nonces(address owner) view returns (uint256)']
};

export const isRegistered = async (learner, provider) => {
  const kernelFactoryContract = new Contract(
    KernelFactory.address,
    KernelFactory.abi,
    provider
  );
  let res = false;
  try {
    res = !!(await kernelFactoryContract.verify(learner, KERNEL_COURSE_ID));
  } catch (err) {
    // throws an error if either the learner is not registered or if the courseId does not exist
    /** */
  }
  return res;
};

export const getDaiNonce = async (learner, provider) => {
  const daiContract = new Contract(
    DaiContract.address,
    DaiContract.abi,
    provider
  );

  return await daiContract.nonces(learner);
};

export const permitAndRegister = async (signer, nonce, expiry, v, r, s) => {
  const kernelFactoryContract = new Contract(
    KernelFactory.address,
    KernelFactory.abi,
    signer
  );
  let res = false;
  try {
    res = !!(await kernelFactoryContract.permitAndRegister(
      KERNEL_COURSE_ID,
      nonce,
      expiry,
      v,
      r,
      s,
      {gasLimit: 200000}
    ));
  } catch (err) {
    // Handle error
    // console.log(err);
  }
  return res;
};
