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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
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
