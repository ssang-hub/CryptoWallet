import { useState } from 'react';

import Context from './walletContext';
function Provider({ children }) {
  const [myWallet, setMyWallet] = useState();

  return <Context.Provider value={[myWallet, setMyWallet]}>{children}</Context.Provider>;
}

export default Provider;
