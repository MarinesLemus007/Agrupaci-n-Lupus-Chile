import React from 'react';
import '../styles/homeView.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Row, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import img_home_1 from '../img/img_home_1.jpg';
import IndexCarousel from '../components/IndexCarousel';
import ButtonIndex from '../components/ButtonIndex';
import BreadCrumb from '../components/BreadCrumb';

class HomeView extends React.Component{

    render(){
        return (
            <>
               
                <NavBar/>
                <BreadCrumb/>
                <Container>
                <section className="about-us">
                    <Row>
                        <Col md={7}>
                            
                                <h1 className="about-us-tittle">Sobre Nosotros</h1>
                                <p>Agrupación Lupus Chile busca ser una fuente continua de información 
                                y apoyo a los pacientes y familiares que deben vivir con esta enfermedad</p>
                            
                        </Col>  
                        <Col md={5}>
                            <div className="img-container">
                                <img className="img_home" src={img_home_1} alt="Sobre Nosotros" />
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="work-approach">
                    <Row>
                        <Col>
                        <h1 className="work-approach-tittle">Enfoque de trabajo</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <IndexCarousel/>
                        </Col>
                    </Row>
                </section>
                <section className="get-involved">
                    <Row>
                        <Col>
                            
                                    <h1 className="get-involved-tittle">Involúcrate</h1>
                                    <p>¡A Lupus Chile nunca le sobran manos! Si quieres apoyarnos con tu trabajo 
                                        o aportes no dudes en contactarnos.
                                    </p>
                                
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <ButtonIndex class="button" name="Suscribete" link="suscribete"/>
                        </Col>
                        <Col md={4}>
                            <ButtonIndex class="button" name="Participa" link="participa"/>
                        </Col>
                        <Col md={4}>
                            <ButtonIndex class="button" name="Dona" link="dona"/>
                        </Col>
                    </Row>
                </section>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default HomeView;