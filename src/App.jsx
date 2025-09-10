import { useState } from "react";
import { PLANTS } from "./data";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {};
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants plants={PLANTS} />
        <Cart cart={cart} />
      </main>
    </>
  );
}
