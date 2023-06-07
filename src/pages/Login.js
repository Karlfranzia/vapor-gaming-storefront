import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import ResponsiveAppBar from "../components/AppBar";
import LeftSidebar from "../components/LeftSidebar";
import Auth from "../utils/auth";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      email: "",
      password: "",
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
              height:"400px",
              width: "400px",
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ textAlign: "center", marginTop: "0" }}>Login</h2>
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginTop: "40px", fontWeight: "bold" }}>
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
              <label style={{ marginTop: "30px", fontWeight: "bold" }}>
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
                  marginTop: "60px",
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

export default Login;
