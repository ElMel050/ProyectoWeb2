
import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeVideo from '../../components/Home-video/HomeVideo';
import HomeVideo2 from '../../components/Home-video/HomeVideo2';
import HomeVideo3 from '../../components/Home-video/HomeVideo3';

import Separador from '../../components/Separador/Separador';
//componentes home

function Home() {
  return (
    <div className="home-container">
      <HomeVideo3 />
      <Separador/>
      <Container className="">
        <h1 className="home-title">Welcome to Our Website 1</h1>
        <p className="home-description">Explore our features and services.</p>
        <div className="home-links">
          <Link to="/Show1" className="btn btn-primary">Go to Show 1</Link></div>
      </Container>
      <Separador/>
      <Container className="position-relative">
        <h1 className="home-title">Welcome to Our Website 2</h1>
        <p className="home-description">Explore our features and services.</p>
        <div className="home-links">
          <Link to="/Show1" className="btn btn-primary">Go to Show 1</Link></div>
      </Container>
      {/*
      <Separador/>
      <Separador/>
      <Separador/>

      {/* Puedes agregar más enlaces aquí */}
    </div>
  );
}
export default Home;


{/*import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
}
*/}