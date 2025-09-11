export default function PlantsCard({ plant, addToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
