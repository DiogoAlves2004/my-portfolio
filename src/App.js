import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

//pages
import Home from "./components/pages/home/Home";
import Frontend from './components/pages/frontend/Frontend';
import Backend from './components/pages/backend/Backend';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from "./components/pages/contact/Contct";
import Mobile from "./components/pages/mobile/Mobile";



function App() {

  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  .then(()=> console.log('deu certo'))
  .catch((err)=> console.log(err))

  return (
    <div className="App">



<Router>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/frontend" element={<Frontend />} />
    <Route path="/backend" element={<Backend />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/mobile" element={<Mobile />} />

    </Routes>




</Router>

</div>


  );
}

export default App;
