import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = {
      first_name: firstName,
      last_name: lastName,
      address: address,
      email: email,
    };

    axios
      .put("http://localhost:8000/clients/" + id, client)
      .then((r) => {
        console.log(r);
      })
      .catch(() => {
        console.log("could not update client");
      });
  };

  useEffect(() => {
    return () => {
      axios
        .get("http://localhost:8000/clients/" + id)
        .then(function (r) {
          console.log("API data received: %o", r.data);
          setFirstName(r.data.first_name);
          setLastName(r.data.last_name);
          setAddress(r.data.address);
          setEmail(r.data.email);
        })
        .catch(function () {
          console.log("API error");
        });
    };
  }, [id]);

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <br />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Last name
          <br />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Address
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />

        <label>
          Email
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
