export default function CartItem({ item }) {
  return (
    <li className="cart-item">
      {item.image} {item.name}
      <button>-</button>
      <span>{item.quantity}</span>
      <button>+</button>
    </li>
  );
}
