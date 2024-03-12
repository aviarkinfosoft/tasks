import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [displayData, setDisplayData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      address,
    };
    setDisplayData(userData);
    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Enter Your Information</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {displayData && (
          <div className="display-data">
            <h3>Entered Information:</h3>
            <p>Name: {displayData.name}</p>
            <p>Email: {displayData.email}</p>
            <p>Address: {displayData.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserForm;
