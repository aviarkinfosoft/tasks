import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import arrr from "./Array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let history = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uni = ids.slice(0, 8);

    let a = name,
      b = age;
    if (a === "" || b === "") {
      alert("Please fill out all fields");
      return;
    }
    arrr.push({ id: uni, name: a, age: b });
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            placeholder="enter name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            required
            type="number"
            placeholder="enter age"
          />
        </Form.Group>
        <Button
          onClick={(e) => handlesubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <Link to="/">
          <Button>Home Page</Button>
        </Link>
      </Form>
    </div>
  );
}

export default Create;
