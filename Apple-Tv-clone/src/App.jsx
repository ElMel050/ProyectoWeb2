import { useState } from 'react'
import './App.css'
/* estilos para bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1.jsx';
import Home from './pages/Home/Home.jsx';
import Show1 from './pages/Show/Show1.jsx';

function App() {

  return (
    <>
      <div className='div-cont'>
        {/*<Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Show1" element={<Show1 />} />
          {/*<Route path="/Search" element={<Search1 />} />
          <Route path="/" element={<Show1 />} />  /////
        </Routes>

        <div className="foot ">booee</div> */}
        <Home />
      </div>

    </>
  )
}

export default App;

/**
 * <div className='lolas-div'><Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline className="d-flex">
            <Form.Control type="text" placeholder="Search" className="me-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar></div>
 */