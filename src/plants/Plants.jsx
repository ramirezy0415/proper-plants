import PlantsCard from "./PlantsCard";
import "./Plants.css";
export default function Plants({ plants }) {
  console.log(plants);
  return (
    <>
      <h2>Plants</h2>
      <ul className="plant-grid">
        {plants.map((plant) => {
          return <PlantsCard key={plant.id} plant={plant} />;
        })}
      </ul>
    </>
  );
}
