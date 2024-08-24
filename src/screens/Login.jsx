// import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [credentials, setcredentials] = useState({ email: "", password: "" });
let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();  // it is to prevent from getting the browser perhtmlForms specific actions like refreshing the page or navigating to a new URL.
    // console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}));
    const response = await fetch("http://localhost:4000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    })
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("enter valid credentials");
    }
    if(json.success){
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem('authToken', json.authToken);
      navigate("/");

    }
  }

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="heading mt-5">
        <div className="container border border-primary border-4 rounded ">
          <form className="m-3 " onSubmit={handleSubmit} >
          <h1 className="text-center">Login</h1>

            <div className="htmlForm-group mb-3  d-flex flex-column ">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="htmlForm-control rounded"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="htmlForm-text text-muted ">
                We will never share your email with anyone else.
              </small>
            </div>

            <div className="htmlForm-group mb-3 d-flex flex-column">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="htmlForm-control rounded"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary  ">
                Submit
              </button>
            </div>
            <div className="login text-center mt-2">
             Do not have a account?
        <Link to="/createuser" className='link-underline link-underline-opacity-0'> Signup</Link>
        </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
