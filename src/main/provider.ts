import { providers } from 'ethers';

const sepoliaProvider = providers.getDefaultProvider('sepolia');

const etherscanProvider = new providers.EtherscanProvider('sepolia', 'HQ7XRKHVG1RZU5XBEVZENXDASFY5F4VY1X');

export { sepoliaProvider, etherscanProvider };
