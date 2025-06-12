import React from 'react';
import { Container } from 'react-bootstrap';
import './Apple.css';
import { Link } from 'react-router-dom';
//componentes home



const AppleTv = () => {
    return (
        <Container className="home-container">
            <h1 className="home-title">Welcome to Our Website</h1>
            <p className="home-description">Explore our features and services.</p>
            <Link to="/NavBar" className="btn btn-primary home-button">Go to NavBar</Link>
            <Link to="/Naar" className="btn btn-secondary home-button">Go to Apple</Link>
        </Container>
    );
};

