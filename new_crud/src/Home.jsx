import { Button, Table } from "react-bootstrap";
import arrr from "./Array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();
  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  }
  function deleted(id) {
    let index = arrr
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    arrr.splice(index, 1);
    history("/");
  }
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {arrr.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) => setID(item.id, item.name, item.age)}
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>

                {/* Using thr deleted function passing
                                    the id of an entry */}
                <td>
                  <Button onClick={(e) => deleted(item.id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Link className="d-grid gap-2" to="/create">
        <Button variant="warning" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Home;
