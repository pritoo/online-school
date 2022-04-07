import React, { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
 //   const [error, setError] = useState("")


 const loginUser =async (event) =>{
  event.preventDefault()

  const response = await fetch('http://localhost:5000/Login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    }, 
    body:JSON.stringify({
      email,password
    })
  })
  const data = await response.json()
    if(data.user){
     localStorage.setItem('token',data.user)
     alert("login successfull")
     window.location.href="Home"
    }else{
      alert("invalid user")
    }
 }

  

  return (
    <>
      <div className="card card-form">
        <div className="card-body">
        <h4 className="card-title">Login to your Account</h4>
            <form className="row" onSubmit={loginUser}>

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
                 <button type="button" className="btn btn-success">Signin</button>
            </form>
        </div>
        <div className="card homepage-body">
          <div className="card-body">
          <h5 className="card-title">New here?</h5>
          <Link to="/Signup">
            <button type="button" className="btn btn-success">
              SignUp
            </button>
          </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
