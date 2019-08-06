import React from 'react';
import logo from '../img/logo.png';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class NavbarR extends React.Component{

    render(){
        return (

            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Fundación Lupus Chile"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavDropdown title="¿Qué es el Lupus?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <Link to='/holi'>¿Qué es el Lupus?</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="¿Cómo costear tu enfermedad?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                            <Link to='/Ges'>¿Qué es el Ges?</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="¿Quiénes somos?" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Dona</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavbarR;