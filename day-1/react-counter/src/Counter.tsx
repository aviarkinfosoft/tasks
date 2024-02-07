// Counter.tsx

import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
   
  };

  const decrement = () => {
    setCount(count - 1);
    
  };

  

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <p className="count-text">Count: {count}</p>
      <button className="increment-btn" onClick={increment}>Increment</button>
      <button className="decrement-btn" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
