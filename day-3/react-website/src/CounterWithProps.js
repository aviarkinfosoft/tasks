// CounterWithProps.js
import React, { useState, useEffect } from 'react';

const CounterWithProps = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component has mounted or props.initialCount has changed.');

    return () => {
      console.log('Component will unmount.');
    };
  }, [props.initialCount]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      window.alert('Counter cannot go below zero.');
    }
  };

  return (
    <div className="container mx-auto my-8">
      <p className="text-xl font-semibold mb-4">Count: {count}</p>
      <button className="bg-blue-500 text-white py-2 px-4 mr-2" onClick={handleIncrement}>
        Increment
      </button>
      <button className="bg-red-500 text-white py-2 px-4" onClick={handleDecrement}>
        Decrement
      </button>
      {count === 0 && <div className="bg-yellow-300 text-yellow-800 p-4 mt-4 rounded">Counter is at zero!</div>}
    </div>
  );
};

export default CounterWithProps;
