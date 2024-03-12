import React from "react";

const ListC = ({ ite }) => {
  return (
    <ul>
      {ite.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListC;
