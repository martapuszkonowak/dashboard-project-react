import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = {
      first_name: firstName,
      last_name: lastName,
      address: address,
      email: email,
    };

    axios
      .post("http://localhost:8000/clients", client)
      .then((r) => {
        console.log(r);
      })
      .catch(() => {
        console.log("could not create new client");
      });
  };

  return (
    <div className="container">
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

          <button type="button" class="btn btn-outline-secondary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
