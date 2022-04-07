
import { Route,Router } from "react-router-dom";
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import './App.css';

function App() {
  // const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Router>
       {/* {user && <Route path="/" exact element={<Home/>}/>}  */}
       <Route path="/" exact element={<Home/>}/>
        <Route path="/Signup" exact element={<Signup/>}/>
         <Route path="/Login" exact element={<Login/>}/>
        {/* <Route path="/" exact element={<Navigate replace to="/Login"/>}/>  */}
      </Router>
    </div>
  );
}

export default App;
