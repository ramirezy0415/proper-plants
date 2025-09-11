import { useState } from "react";
import { PLANTS } from "./data";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    // Check if item is in cart
    const itemExist = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExist) {
      // If it is, increment the item's quantity
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        })
      );
    } else {
      // If it's not then add the item to the cart list
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (item) => {
    // Check if item is in cart
    const itemExist = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExist) {
      // If it is, increment the item's quantity
      setCart(
        cart
          .map((cartItem) => {
            if (cartItem.id === item.id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
              return cartItem;
            }
          })
          .filter((cartItem) => cartItem.quantity > 0)
      );
    }
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
