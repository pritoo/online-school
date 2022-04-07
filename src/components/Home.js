import React,{useState,useEffect}from 'react'
import { Link,useHistory} from "react-router-dom";
import jwt from "jsonwebtoken";

const Home = () => {
  const history =useHistory()
   const [user, setUser] = useState('User')
   
   useEffect(()=>{
     const token =localStorage.getItem('token')
     if(token){
        const authUser =jwt.decode(token)
        console.log(authUser)
        if(!authUser){
          localStorage.removeItem('token')
          history.replace('/Login')
        }else{
          setUser(authUser)
        }
     }else{
       alert('please login')
       history.replace('./Login')
     }
     
   },[])

   const logOutUser = () =>{
     alert('succussfully logged out')
     localStorage.removeItem('token')
     history.replace('/Login')
   }

  return(
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand">School</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link">contact</Link>
              </li>
              <li className="nav-item">
              <Link to="/Signup" className="nav-link">Registration</Link>
              </li>
            </ul>
            <form className="d-flex">
            <button className="btn btn-outline-success" type="submit" onClick={logOutUser}>Logout</button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <h4>Welcome User</h4>
        <h6>{user.firstname}</h6>
      </div>
    </>
  )
}

export default Home