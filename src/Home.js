import axios from "axios";
import { useState } from "react";

function Home() {
  // todo: load clients via API axios
  // todo: build the table below from returned data

  const [clients, setClients] = useState([]);

  const apiUrl = "http://localhost:8000/clients";

  axios.get(apiUrl).then((r) => {
    setClients(r.data);
  });

  return (
    <div className="Home">
      <p>Home</p>
      <p>{JSON.stringify(clients)}</p>
    </div>
  );
}

export default Home;
