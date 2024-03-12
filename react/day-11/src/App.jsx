import React from "react";
import { AppProvider } from "./AppContext";
import ItemManager from "./ItemManager";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <div>
          <h1>Item Management with Context</h1>
          <ItemManager />
        </div>
      </AppProvider>
    </div>
  );
};

export default App;
