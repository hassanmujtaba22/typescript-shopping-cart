import React from "react";
import { ProductsType } from "../types";
import { Wrapper } from "./Cart.Styles";
import CartItems from "../CartItems/CartItems";

type Props = {
  cartItems: ProductsType[];
  addToCart: (clickedItem: ProductsType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: ProductsType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : null}
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h1>Total Amount: ${calculateTotal(cartItems).toFixed(2)}</h1>
    </Wrapper>
  );
};
export default Cart;
