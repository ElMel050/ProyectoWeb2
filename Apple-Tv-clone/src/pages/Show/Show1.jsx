import React from 'react';
import { Container } from 'react-bootstrap';
import './Show.css';
import { Link } from 'react-router-dom';
//componentes home



function Show1  () {
    return (
        <Container className="show-container">
            <h1 className="show-title">Welcome to Our Website</h1>
            <p className="show-description">Explore our features and services.</p>
        </Container>
    );
};

export default Show1;
