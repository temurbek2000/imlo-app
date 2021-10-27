import React from 'react';
import {
    Navbar,Container,Nav,NavDropdown
} from "react-bootstrap";
import {
    FaHome,
    FaPlay,
    FaSearch,
    FaUserAlt
} from 'react-icons/fa'
import {
    BiExit
} from 'react-icons/bi'
import {
    Row,
    Col
} from 'react-bootstrap'
class NavbarComponent extends React.Component{
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><p className="fw-bold m-2" style={{color:"lightgrey",fontSize:'25px'}}>ImloManbai</p></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/home"><div className="d-flex ">
                                    <FaHome className="mt-1 m-1" style={{fontWeight:'bold',fontSize:'20px'}}/><b>Bosh sahifa</b>

                                </div></Nav.Link>
                                <Nav.Link href="#"><div className="d-flex ">
                                    <FaPlay className="mt-1 m-1" style={{fontWeight:'bold',fontSize:'20px'}}/><b>Rotatsiya</b>
                                </div></Nav.Link>
                                <Nav.Link href="/search"><div className="d-flex ">
                                    <FaSearch className="mt-1 m-1" style={{fontWeight:'bold',fontSize:'20px'}}/><b>So'z qidirish</b>
                                </div></Nav.Link>

                                <Nav.Link href="/login"><div className="d-flex ">
                                    <FaUserAlt className="mt-1 m-1" style={{fontWeight:'bold',fontSize:'20px'}}/><b>Kirish</b>
                                </div></Nav.Link>

                                <Nav.Link href="#"><div className="d-flex ">
                                    <BiExit className="mt-1 m-1" style={{fontWeight:'bold',fontSize:'20px'}}/><b>Chiqish</b>
                                </div></Nav.Link>


                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default NavbarComponent;