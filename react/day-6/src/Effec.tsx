import React, { useState, useEffect } from "react";
import sampleData from "./sampleData.json";

const Effec = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const filteredData = sampleData.users.filter(
          (user) => user.id === 1 || user.id === 2
        );
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          <h1>Data:</h1>
          {data.map((user) => (
            <div key={user.id}>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Effec;
