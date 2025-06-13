// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import searchImg from '../../media/icons/search.svg';
import logoAp from '../../media/icons/tv+.png';
import './Navbar1.css';

const Navbar1 = () => {
    const handleSearchClick = () => {
        window.location.href = 'busca.html'; // Esto también se puede convertir luego en navegación con `useNavigate`
    };

    return (
        <div className="container-fluid cont-nav " style={{ maxHeight: '1em' }}>
            <Navbar expand="sm" fixed="top" className='py-1'>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ maxWidth: '2rem' }}>
                        <img
                            loading="lazy"
                            src={logoAp }
                            alt="Logo"
                            className="mx-3"
                            style={{
                                height: '2rem',
                                borderRadius: '0.35em',
                                border: 'solid 0.15rem #ffffff',
                            }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <div className="lol ">lol</div>
                            <Form
                                className="d-flex px-1"
                                style={{
                                    height: '1.5rem',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '0.5em',
                                    flexDirection: 'row',
                                }}
                            >
                                <label htmlFor="searchInput" style={{ height: '1rem' }}>
                                    <img src={searchImg} alt="Search" style={{height:'1.5rem',marginTop:'-0.25rem'}}/>
                                </label>
                                <FormControl
                                    type="text"
                                    id="searchInput"
                                    placeholder="Buscar..."
                                    style={{ border: 0, width: '5rem',height: '1.5rem' }}
                                    onClick={handleSearchClick}
                                />
                            </Form>
                            <div className="px-1 mx-2">
                                <Button variant="primary" data-bs-toggle="popover" data-bs-target="#SingIn">
                                    Sign In
                                </Button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbar1;
