import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./about.jsx";
import Home from "./Home.jsx";


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
