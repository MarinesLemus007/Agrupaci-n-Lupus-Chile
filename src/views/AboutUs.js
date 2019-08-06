import React from "react";
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import "../styles/AboutUs.css";
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import agrupacionFachada from "../img/agrupacionFachada.jpg";

class AboutUs extends React.Component {
    render(){
        return (
            <>
                <NavBar/>
                <section>
                <Container>
    
                    <Row>    
                        <Col md={7} >
                            <div className="AboutUsfirth">   
                                <h1>Quiénes somos</h1>        
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Col>
                        <Col md={5} >
                            <div>
                                <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                            </div>
                        </Col>   
                    </Row>
                        
                    <Row>
                        <Col md={12} >  
                            <div className="AboutUsSecond">  
                                <h1>Quiénes somos</h1>
                            </div>
                        </Col>
                    </Row>
      
                    <Row>
                        <Col md={12} > 
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                            </div>    
                        </Col>
                    </Row> 

                    <Row>                           
                        <Col md={6} >
                            <div className="AboutUsthird">    
                                <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                            </div>
                        </Col> 
                        <Col md={6} >
                            <div>
                                <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                            </div>
                        </Col> 
                    </Row>
                </Container>
                </section>    
                <Footer/>
                
            </>
        )
    }
}

export default AboutUs;