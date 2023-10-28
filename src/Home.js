import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  // todo: load clients via API axios
  // todo: build the table below from returned data

  const [clients, setClients] = useState([]);

  useEffect(() => {
    console.log("Within useEffect...");
    axios
      .get("http://localhost:8000/clients")
      .then(function (r) {
        console.log("API data received: %o", r.data);
        return setClients(r.data);
      })
      .catch(function () {
        console.log("API error");
      });
  }, []);

  return (
    <div className="Home">
      <p>Home</p>
      <p>Data table here</p>
      <h2>Clients' list</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>

        {clients.map((client) => (
          <tr>
            <td>{client.id}</td>
            <td>{client.first_name}</td>
            <td>{client.last_name}</td>
            <td>{client.address}</td>
            <td>{client.email}</td>
            <td>
              <button>X</button>
              <button>Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Home;
