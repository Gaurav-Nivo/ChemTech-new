"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiCategory } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";

function BottomHeader() {
    const [mainCat , setMainCat] = useState([])
    useEffect(()=>{
        axios.get('http://localhost/chemtech15-12/chemtech/Api/local/mainapi.php')
        .then((res)=>(
            setMainCat(res.data)
        ))
    })
    return (
        <>
            <Navbar expand="lg" className="bottom-header-bg ">
                <Container >
                    <Navbar.Brand className='bottom-header-dropdown'>
                        <BiCategory className='bottom-header-dropdown-icon' />
                        <NavDropdown title="Product" id="dropdown-menu-align-responsive-2">
                           <ul style={{listStyle:'disc'}}>
                           {
                                mainCat.map((item)=>(
                                    <NavDropdown.Item href={`/${item.id}`}><li><stong>{item.name_mcat}</stong></li></NavDropdown.Item>
                                ))
                            }
                           </ul>
                        </NavDropdown>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-end' style={{" justify-content":"start "}}>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                            <Form className="bottom-header-search-main ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 bottom-header-search "
                                    aria-label="Search"
                                />
                                <button className='bottom-header-search-btn'>Search</button>
                            </Form>

                    </Navbar.Collapse>
                    <div className='bottom-header-icons-div'>
                        <button>
                            <RiFileList3Line className='bottom-header-icons' />
                        </button>
                        <button>
                            <FiShoppingCart className='bottom-header-icons' />
                        </button>
                        <button>
                            <MdAccountCircle className='bottom-header-icons' />
                        </button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default BottomHeader;