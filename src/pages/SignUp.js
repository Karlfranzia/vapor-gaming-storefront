import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import ResponsiveAppBar from "../components/AppBar";
import LeftSidebar from "../components/LeftSidebar";
import { ADD_USER } from "../utils/mutation";
import Auth from "../utils/auth";

function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      email: '',
      password: '',
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <ResponsiveAppBar />
      <LeftSidebar />
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f1f1f1",
          }}
        >
          <div
            style={{
              height: "400px",
              width: "400px",
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ textAlign: "center", marginTop: "0" }}>Login</h2>
            <form
              onSubmit={handleFormSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label style={{ marginTop: "20px", fontWeight: "bold" }}>
                Username
              </label>
              <input
               style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                value={formState.name}
                onChange={handleChange}
              />
              <label style={{ marginTop: "20px", fontWeight: "bold" }}>
                Email
              </label>
              <input
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                }}
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <label style={{ marginTop: "20px", fontWeight: "bold" }}>
                Password
              </label>
              <input
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                }}
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                style={{
                  padding: "10px",
                  marginTop: "40px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                className="btn btn-block btn-primary"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <div />
    </div>
  );
}

export default SignUp;
