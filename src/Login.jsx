import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  }); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/login", data)
      .then(response => {
        console.log(response.data);
        alert("Login successful!");
      })
      .catch(error => {
        console.log(error);
        alert("Login failed.");
      });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Log In to your DataQuest Account</h1>
      </div> 
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </form>

            <br/>
            <br/>
            <h5 className="text-center">Don't have an Account?</h5>
                            <div className="col-12 text-center">
                                <NavLink to="/registration" className="button">Sign Up</NavLink>
                               </div>
            <br/>
            <br/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;