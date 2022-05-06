import { Contract } from 'ethers'
import { addresses, abis } from './constants'

const KERNEL_COURSE_ID = '0'

export const isRegistered = async (learner, provider) => {
  const { chainId } = await provider.getNetwork()

  const deSchoolContract = new Contract(
    addresses(chainId).deSchool,
    abis.deSchool,
    provider
  )
  let res = false
  try {
    res = !!(await deSchoolContract.verify(learner, KERNEL_COURSE_ID))
  } catch (err) {
    // throws an error if either the learner is not registered or if the courseId does not exist
    /** */
  }
  return res
}

export const getDaiNonce = async (learner, provider) => {
  const { chainId } = await provider.getNetwork()

  const daiContract = new Contract(addresses(chainId).dai, abis.dai, provider)

  return await daiContract.nonces(learner)
}

export const getScholarshipAvailable = async (provider) => {
  const { chainId } = await provider.getNetwork()

  const deSchoolContract = new Contract(
    addresses(chainId).deSchool,
    abis.deSchool,
    provider
  )

  return await deSchoolContract.scholarshipAvailable(KERNEL_COURSE_ID)
}

export const registerScholar = async (signer) => {
  const chainId = await signer.getChainId()

  const deSchoolContract = new Contract(
    addresses(chainId).deSchool,
    abis.deSchool,
    signer
  )

  return await deSchoolContract.registerScholar(KERNEL_COURSE_ID)
}

export const permitAndRegister = async (signer, nonce, expiry, v, r, s) => {
  const chainId = await signer.getChainId()

  const deSchoolContract = new Contract(
    addresses(chainId).deSchool,
    abis.deSchool,
    signer
  )
  let res = false
  try {
    res = !!(await deSchoolContract.permitAndRegister(
      KERNEL_COURSE_ID,
      nonce,
      expiry,
      v,
      r,
      s,
      { gasLimit: 200000 }
    ))
  } catch (err) {
    // Handle error
    // console.log(err);
  }
  return res
}
