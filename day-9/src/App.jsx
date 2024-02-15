import React, { useEffect, useState } from "react";
import "./App.css";
import itemsData from "./items.json";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData.items);
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {/* Using map function to render items dynamically */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
