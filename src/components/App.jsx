import React from "react";
import Login from "./login"
import Signin from "./signin"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(){
  return (
   
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="Signin" element={<Signin />} />
          
      </Routes>
      </BrowserRouter>
      
  )
}
export default App;