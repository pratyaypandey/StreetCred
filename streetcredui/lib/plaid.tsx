"use client"

import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { CraCheckReportProduct } from 'plaid';

interface PlaidState {
  linkToken: string | null;
  accessToken: string | null;
  itemId: string | null;
  isItemAccess: boolean;
  linkSuccess: boolean;
  isPaymentInitiation: boolean;
  products: Array<string>;
  backend: boolean;
  linkTokenError: {
    error_message: string;
    error_code: string;
    error_type: string;
  } | null;
  userToken: string | null;
  isUserTokenFlow: boolean;
  isCraProductsExclusively: boolean;
}

type PlaidAction = {
  type: 'SET_STATE';
  state: Partial<PlaidState>;
};

const initialState: PlaidState = {
  linkToken: null,
  accessToken: null,
  itemId: null,
  isItemAccess: false,
  linkSuccess: false,
  isPaymentInitiation: false,
  products: [],
  backend: true,
  linkTokenError: null,
  userToken: null,
  isUserTokenFlow: false,
  isCraProductsExclusively: false,
};

const PlaidContext = createContext<{
  state: PlaidState;
  dispatch: Dispatch<PlaidAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: PlaidState, action: PlaidAction): PlaidState => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        ...action.state,
      };
    default:
      return state;
  }
};

export const PlaidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlaidContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaidContext.Provider>
  );
};

export const usePlaid = () => {
  const context = useContext(PlaidContext);
  if (context === undefined) {
    throw new Error('usePlaid must be used within a PlaidProvider');
  }
  return context;
};

export default PlaidContext; 