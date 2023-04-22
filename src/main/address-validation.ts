import { ethers } from 'ethers';

const isAddress = (address: string) => {
  return ethers.utils.isAddress(address);
};

export { isAddress };
