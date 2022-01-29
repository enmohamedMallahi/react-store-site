import React, { useReducer } from 'react';

const CartContext = React.createContext();

const cartReducer = (state, action) => {
  if (action.type == 'ADD') {
    const updatedCartItems = state;
  }
};

const defaultCartState = {
  cartItems: [],
  amount: 0
};

const CartProvider = ({ children }) => {
  const [CartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: CartState.cartItems,
        amount: CartState.amount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
