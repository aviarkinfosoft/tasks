import ConditionalComponent from "./ConditionalComponent";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <ConditionalComponent condition1={true} condition2={true} />
      {/* Renders "Condition is true" */}
      <ConditionalComponent condition1={false} condition2={true} />
      {/* Renders "Condition is false" */}
    </div>
  );
}

export default App;
