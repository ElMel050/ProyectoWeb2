
import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeVideo from '../../components/Home-video/HomeVideo';
import HomeVideo2 from '../../components/Home-video/HomeVideo2';
//componentes home

function Home() {
  return (
    <Container className="home-container">
      <HomeVideo2 />
      <div className="z5">lol</div>
      <div className="position-relative">
        <h1 className="home-title">Welcome to Our Website</h1>
        <p className="home-description">Explore our features and services.</p>
        <div className="home-links">
          <Link to="/Show1" className="btn btn-primary">Go to Show 1</Link></div>
      </div>
      <div className="position-relative">
        <h1 className="home-title">Welcome to Our Website</h1>
        <p className="home-description">Explore our features and services.</p>
        <div className="home-links">
          <Link to="/Show1" className="btn btn-primary">Go to Show 1</Link></div>
      </div>
      {/* Puedes agregar más enlaces aquí */}
    </Container>
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