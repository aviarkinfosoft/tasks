import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpListing = () => {
  const [empdata, Setempdata] = useState(null);
  const { empid } = useParams();

  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const RemoveFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:4000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        Setempdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Link to="employee/create" className="btn btn-success">
            Add New Component
          </Link>
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          RemoveFunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
