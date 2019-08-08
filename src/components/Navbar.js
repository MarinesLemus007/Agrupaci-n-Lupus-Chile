import React from 'react';
import logo from '../img/logo.png';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends React.Component{

    render(){
        return (

            <Navbar bg="white" expand="lg">
                <Container>
                <Navbar.Brand href="/">
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
            

                        <Nav.Link href="/Que-es-el-lupus">¿Qué es el Lupus?</Nav.Link>
                    
                        <NavDropdown title="¿Cómo costear tu enfermedad?" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ges">
                                ¿Qué es el Ges?
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ges">Ley Ricarte Soto</NavDropdown.Item>
            
                            
                         
            
                        </NavDropdown>
                        <Nav.Link href="/Quienes-Somos">¿Quiénes somos?</Nav.Link>
                        <Nav.Link href="/Preguntas-Frecuentes">Preguntas Frecuentes</Nav.Link>
                        <Nav.Link href="/Contacto">Contácto</Nav.Link>
                        <Nav.Link href="/Donar">Dona</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavBar;