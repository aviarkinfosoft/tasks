import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const { empid } = useParams();
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, activevalidation] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const empData = { id, name, email, phone, active };

    fetch("http://localhost:4000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("saved successfully");

        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>for editing personal iformation</h2>
      <form className="container" onSubmit={handlesubmit}>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-lg-12">
            <div className="form-control">
              <label>ID</label>
              <input
                value={id}
                disabled="disabled"
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-control">
              <label>Name</label>
              <input
                required
                value={name}
                onMouseDown={(e) => activevalidation(true)}
                onChange={(e) => namechange(e.target.value)}
                className="form-control"
              ></input>
              {name.length == 0 && validation && (
                <span className="text-danger">Enter the name</span>
              )}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-control">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => emailchange(e.target.value)}
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-control">
              <label>Phone</label>
              <input
                value={phone}
                onChange={(e) => phonechange(e.target.value)}
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-check">
              <input
                checked={active}
                onChange={(e) => activechange(e.target.checked)}
                className="form-check-input"
              ></input>
              <label className="form-check-label">is Active</label>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-check">
              <button className="btn btn-success" type="submit">
                Save
              </button>
              <Link to="/" className="btn btn-danger">
                Back
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmpEdit;
