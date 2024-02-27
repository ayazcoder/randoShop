// MasterContext.js
import React, { createContext } from 'react';
import { CartProvider, getCart } from './CartContext';
import { ItemsProvider, getItems } from './ItemsContext';

const MasterContext = createContext();

export const useMasterContext = () => {
  const cart = getCart();
  const items = getItems();

  return { cart, items };
};

export const MasterProvider = ({ children }) => {
  return (
    <CartProvider>
      <ItemsProvider>
        <MasterContext.Provider value={useMasterContext()}>
          {children}
        </MasterContext.Provider>
      </ItemsProvider>
    </CartProvider>
  );
};
