export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      {item.image} {item.name}
      <button onClick={() => removeFromCart(item)}>-</button>
      <span className="cart-item-quantity">{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </li>
  );
}
