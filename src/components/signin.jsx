import React from "react";
import {Link} from "react-router-dom";
function Signin() {
  
 
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form >
        <input
         
          type="text"
          placeholder="name"
          
        />
         <input
          
          type="text"
          placeholder="Email"
          
        />
         <input
         
          type="text"
          placeholder="Password"
         
        />
         <input
         
          type="text"
          placeholder="branch"
         
        />

        <button type="submit">Submit</button>
        <div className="con">
    <p>Already signed up?</p>
    <button><Link to="../login">Login</Link></button>
  </div>
      </form>
    </div>
  );
}

export default Signin;
