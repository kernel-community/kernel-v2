import {Contract} from 'ethers';
import {Constants} from './constants';

const KERNEL_COURSE_ID = '0';

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
    res = !!(await kernelFactoryContract.verify(learner, KERNEL_COURSE_ID));
  } catch (err) {
    // throws an error if either the learner is not registered or if the courseId does not exist
    /** */
  }
  return res;
};
