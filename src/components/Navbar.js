import React from 'react';
import logo from '../img/logo.png';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends React.Component{

    render(){
        return (

            <Navbar bg="white" expand="lg">
                <Container>
                <Navbar.Brand as={Link} to="/">
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
                        
            
                        
                        <Nav.Link as={Link} to="/Que-es-el-lupus" style={
                            this.props.state === 'lupus-definition' ? {borderBottom: '#7E2C81  3px solid'}:
                        {borderBottom:'none'}}
                        >¿Qué es el Lupus?</Nav.Link>
                    
                        <NavDropdown style={
                            this.props.state === 'ges' ? {borderBottom: '#7E2C81  3px solid'}:
                        {borderBottom:'none'}} title="¿Cómo costear tu enfermedad?" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/ges">
                                ¿Qué es el Ges?
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ges">Ley Ricarte Soto</NavDropdown.Item>
            
                            
                         
            
                        </NavDropdown>
                        <Nav.Link as={Link} to="/Quienes-Somos" style={
                            this.props.state === 'about-us' ? {borderBottom: '#7E2C81  3px solid'}:
                        {borderBottom:'none'}}>¿Quiénes somos?</Nav.Link>

                        <Nav.Link  as={Link} to="/Preguntas-Frecuentes" style={
                            this.props.state === 'f-questions' ? {borderBottom: '#7E2C81  3px solid'}:
                        {borderBottom:'none'}}>Preguntas Frecuentes</Nav.Link>

                        <Nav.Link as={Link} to="/Contacto" style={
                            this.props.state === 'contacto' ? {borderBottom: '#7E2C81  3px solid'}:
                        {borderBottom:'none'}}>Contácto</Nav.Link>
                        <Nav.Link as={Link} to="/Donar" style={
                            this.props.state === 'donation' ? {borderBottom: '#7E2C81  3px solid'}:
                        {borderBottom:'none'}}>Dona</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavBar;