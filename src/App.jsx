import { useState } from "react";
import { PLANTS } from "./data";
import Plants from "./plants/Plants";

export default function App() {
  const [plants, setPlants] = useState([]);
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants plants={PLANTS} />
      </main>
    </>
  );
}
