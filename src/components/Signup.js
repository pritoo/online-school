import React, { useState } from "react";
import { Link,useHistory} from "react-router-dom";
//import axios from "axios";

const Signup = () => {
  const history =useHistory()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     

    const registerUser =async (event) =>{
      event.preventDefault()

      const response = await fetch('http://localhost:5000/Signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        }, 
        body:JSON.stringify({
          firstName,lastName,email,password
        })
      })
      const data = await response.json()
        if(data.status==='OK'){
          history.push('/Login')
        }
     }

  return (
    <>
      <div className="card card-form">
        <div className="card-body">
          <h5 className="card-title">Welcome Back</h5>
          <Link to="/Login">
            <button type="button" className="btn btn-success">
              Sign in
            </button>
          </Link>
        </div>
        <div className="card homepage-body">
          <div className="card-body">
            <h3 className="card-title">Create Account</h3>
            <form className="row" onSubmit={registerUser}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstName"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastName"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
              </div>
              {/* {error && <div className="row">{error}</div>} */}
              <button type="button" className="btn btn-success">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
