import React, { useState } from "react";
import { useAppContext } from "./AppContext";

const ItemManager = () => {
  const { state, dispatch } = useAppContext();
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        name: inputValue.trim(),
      };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setInputValue("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div>
      <h2>Item Manager</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;
