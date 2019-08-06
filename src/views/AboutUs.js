import React from "react";
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import "../styles/AboutUs.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import agrupacionFachada from "../img/agrupacionFachada.jpg";

class AboutUs extends React.Component {
    render(){
        return (
            <div className="AboutUs">
                <Navbar/>
                <Container>
                    <Row> 
                        <div className="AboutUsfirth">   
                            <h1>Quiénes somos</h1>  
                            <Col md={7} >
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                            <Col md={5} >
                                <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                            </Col>   
                        </div>        
                        <div className="AboutUsSecond"> 
                            <Col md={12} >  
                                <h1>Quiénes somos</h1>
                            </Col>
                            <Col md={12} > 
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                        </div>
                    <div className="AboutUsthird">
                            <Col md={6} >
                                <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                            </Col> 
                            <Col md={6} >
                                <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                            </Col> 
                        </div>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;