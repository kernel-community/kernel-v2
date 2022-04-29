import {Contract} from 'ethers';
import {Constants} from './constants';

const KERNEL_COURSE_ID = '0';

const DaiContract = {
  address: Constants.DaiContractAddress,
  abi: ['function nonces(address owner) view returns (uint256)']
};

const DeSchoolContract = {
  address: Constants.DeSchoolContractAddress,
  abi: Constants.DeSchoolAbi
};

export const isRegistered = async (learner, provider) => {
  const deSchoolContract = new Contract(
    DeSchoolContract.address,
    DeSchoolContract.abi,
    provider
  );
  let res = false;
  try {
    res = !!(await deSchoolContract.verify(learner, KERNEL_COURSE_ID));
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

export const getScholarshipAvailable = async (provider) => {
  const deSchoolContract = new Contract(
    DeSchoolContract.address,
    DeSchoolContract.abi,
    provider
  );

  return await deSchoolContract.scholarshipAvailable(KERNEL_COURSE_ID);
};

export const registerScholar = async (signer) => {
  const deSchoolContract = new Contract(
    DeSchoolContract.address,
    DeSchoolContract.abi,
    signer
  );

  return await deSchoolContract.registerScholar(KERNEL_COURSE_ID);
};

export const permitAndRegister = async (signer, nonce, expiry, v, r, s) => {
  const deSchoolContract = new Contract(
    DeSchoolContract.address,
    DeSchoolContract.abi,
    signer
  );
  let res = false;
  try {
    res = !!(await deSchoolContract.permitAndRegister(
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
