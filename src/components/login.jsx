import React,{useState} from "react";
import {Link} from "react-router-dom";

function Login(){

  
return (
    <div>
    <div className="container">
    <h1>Login</h1>
    <form >
      <input
      
        type="text"
        placeholder="Email"
        
      />
       <input
       
        type="text"
        placeholder="Password"
        
      />
       
      

      <button type="submit">Submit</button>
      <div className="con">
    <p>haven't signed up?</p>
    <button><Link to="../signin">Sign Up</Link></button>
  </div>
    </form>
    
  </div>
  
  </div>
);
    
}
export default Login;
