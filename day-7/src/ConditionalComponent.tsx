import React from "react";

const ConditionalComponent = (props) => {
  const { condition1, condition2 } = props;

  return (
    <div>
      {condition1 && condition2 ? (
        <h1>Both conditions are true</h1>
      ) : condition1 && !condition2 ? (
        <h1>Condition 1 is true, but condition 2 is false</h1>
      ) : !condition1 && condition2 ? (
        <h1>Condition 1 is false, but condition 2 is true</h1>
      ) : (
        <h1>Both conditions are false</h1>
      )}
    </div>
  );
};

export default ConditionalComponent;
