export const AddCartItem = (cartItems, newCartItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === newCartItem.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};
