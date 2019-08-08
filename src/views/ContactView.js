import React from 'react';
import '../styles/contactView.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import pin from "../img/iconosPng/pin_purple.png";
import whatsapp from "../img/iconosPng/whatsapp_purple.png";
import email from "../img/iconosPng/email_purple.png";
class ContactView extends React.Component{
   
    render(){
        return (
            <>
                
                <NavBar/>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item active href='/Contacto'>
                    Contacto
                    </Breadcrumb.Item>
                </Breadcrumb>
            <Container>
                <section className="definition-0">
                    <Row>
                        <Col>
                            <h1 className="definition-title">Contáctanos</h1>
                            <p>¿Tienes alguna duda? por favor no dudes en comunicarte con nosotros en:</p>
                        </Col>
                    </Row>
                </section>
                <Row>
                <Col sm={6}>
                        <Row>
                            <Col sm={2} >
                                <img className="icon_contact" src={whatsapp} alt="logo whatsapp" />
                            </Col>
                            <Col sm={9} >
                                <p className="p-contact">+56 9 93058454</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2} >
                                <img className="icon_contact" src={email} alt="logo email" />
                            </Col>
                            <Col sm={9} >
                                <p className="p-contact">contacto@agrupacionlupuschile.cl</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2} >
                                <img className="icon_contact" src={pin} alt="logo pin" />
                            </Col>
                            <Col sm={9} >
                                <p className="p-contact">Hospital Sótero del Río Av. Concha y Toro 3459, Puente Alto, Santiago.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.0730098324657!2d-70.58359698479737!3d-33.577453580737746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d725b4a98067%3A0x62a60b0a60a05f60!2sHospital+Dr.+S%C3%B3tero+del+R%C3%ADo!5e0!3m2!1ses!2scl!4v1565088790602!5m2!1ses!2scl" allowfullscreen></iframe>

                    </Col>
                    </Row>
            </Container>
                <Footer/>
            </>
        )
    }
}

export default ContactView;