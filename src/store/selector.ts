import { createSelector } from '@reduxjs/toolkit';

// export const wallet = (state) => state.wallet;

export const accountTargetSelector = (state) => state.account.acc;
export const historySelector = (state) => state.account.history;

export const walletSelector = (state) => state.wallet.wallet;

// get address account target
export const addressSelector = (state) => state.account.acc.address;

// get all accounts in wallet (return array)
export const accountSelector = (state) => state.accounts.accounts;
