import {Contract} from 'ethers';
import {Constants} from './constants';

const KernelFactory = {
  address: Constants.KernelFactoryContractAddress,
  abi: Constants.KernelFactoryAbi
};

export const isRegistered = async (learner, provider) => {
  const kernelFactoryContract = new Contract(
    KernelFactory.address,
    KernelFactory.abi,
    provider
  );
  let res = false;
  try {
    res = !!(await kernelFactoryContract.verify(learner, '0'));
  } catch (err) {
    // throws an error if either the learner is not registered or if the courseId does not exist
    /** */
  }
  return res;
};
