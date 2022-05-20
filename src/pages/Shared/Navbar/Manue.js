import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Manue.css'

const Manue = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Doctors Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='link'>
                            <Link to="/">Home</Link>
                            <Link to="about">About</Link>
                            <Link to="/reviews">Reviews</Link>
                            <Link to="/appointment">Appointment</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signUp">signUp</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </div>
    );
};

export default Manue;