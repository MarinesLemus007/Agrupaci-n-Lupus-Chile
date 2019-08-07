import React from "react";
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import "./styles/Footer.css";
import facebook_white from "../img/iconosPng/facebook_white.png";
import youtube_white from "../img/iconosPng/youtube_white.png";
import twitter_white from "../img/iconosPng/twitter_white.png";
import pin_white from "../img/iconosPng/pin_white.png";
import whatsapp_white from "../img/iconosPng/whatsapp_white.png";
import email_white from "../img/iconosPng/email_white.png";




class Footer extends React.Component {
    render(){
        return <div className="footer">
            <Container fluid>
                <Row>
                    <Col sm={4}>
                    <div className="contact">   
                        <h1>Contáctanos</h1>
                        <Row>
                            <Col sm={2} >
                                <img className="footer_logo_address" src={pin_white} alt="logo Twitter" />
                            </Col>
                            <Col sm={9} >
                                <p>Hospital Sótero del Río Av. Concha y Toro 3459, Puente Alto, Santiago.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2} >
                                <img className="footer_logo_whatsapp" src={whatsapp_white} alt="logo Twitter" />
                            </Col>
                            <Col sm={9} >
                                <p>+56 9 93058454</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2} >
                                <img className="footer_logo_email" src={email_white} alt="logo Twitter" />
                            </Col>
                            <Col sm={9} >
                                <p>contacto@agrupacionlupuschile.cl</p>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                    
                    <Col sm={4}>
                        <div className="info">   
                            <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/#"> ¿Qué es el Lupus?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">¿Cómo costear tu enfermedad?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">¿Quienes somos?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Dona</a>
                            </li>
                            </ul>
                        </div>
                    </Col>
                    
                    <Col sm={4}>
                        <div className="socialMedia">
                            <h1>Síguenos en:</h1>
                            <img className="footer_logo_facebook" src={facebook_white}  alt="logo Facebook" />
                            <img className="footer_logo_twitter" src={twitter_white}  alt="logo twitter" />
                            <img className="footer_logo_youtube" src={youtube_white}  alt="logo youtube" /> 
                        </div>
                        {/* <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.0730098324657!2d-70.58359698479737!3d-33.577453580737746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d725b4a98067%3A0x62a60b0a60a05f60!2sHospital+Dr.+S%C3%B3tero+del+R%C3%ADo!5e0!3m2!1ses!2scl!4v1565088790602!5m2!1ses!2scl" allowfullscreen></iframe>
                        </div> */}
                    </Col>       
                </Row>
            </Container>
        </div>
    }
}

export default Footer;