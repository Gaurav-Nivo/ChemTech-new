"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function openPdf() {
    window.open("/pdf/Brochure.pdf")
}

function TopHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" className="" sticky="top">
            <Container className='main-navbar-container-100'>
                <Navbar.Brand href="/"><img className="main-logo" src='/chemtech-logo.svg' /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="navbar-space-between" style={{"margin-left": "30px"}}>
                        <Nav.Link className='nav-headers' href="/about">About</Nav.Link>
                        <Nav.Link className='nav-headers' href="/download-pdf ">Download</Nav.Link>
                        <Nav.Link className='nav-headers' href="/blog">Blog</Nav.Link>
                        <Nav.Link className='nav-headers' href="/application">Application</Nav.Link>
                        <Nav.Link className='nav-headers' href="/contact">Contact Us</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default TopHeader;