import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // todo: load clients via API axios
  // todo: build the table below from returned data

  const [clients, setClients] = useState([]);

  useEffect(() => {
    return () => {
      axios
        .get("http://localhost:8000/clients")
        .then(function (r) {
          console.log("API data received: %o", r.data);
          return setClients(r.data);
        })
        .catch(function () {
          console.log("API error");
        });
    };
  }, []);

  return (
    <div className="Home">
      <h2>Clients list</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <th scope="row">1</th>
              <td>{client.id}</td>
              <td>{client.first_name}</td>
              <td>{client.last_name}</td>
              <td>{client.address}</td>
              <td>{client.email}</td>
              <td>
                <Link to={"/delete/" + client.id}>Delete</Link>
                <Link to={"/update/" + client.id}>Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-client">
        <Link to="/create">Add new client</Link>
      </div>
    </div>
  );
}

export default Home;
