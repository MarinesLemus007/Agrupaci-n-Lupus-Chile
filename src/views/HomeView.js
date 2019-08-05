import React from 'react';
import '../indexNew.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Row, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import img_home_1 from '../img/img_home_1.jpg';
import IndexCarousel from '../components/IndexCarousel';

class HomeView extends React.Component{

    render(){
        return (
            <>
                <Container fluid={true}>
                <Navbar/>
                <section className="about-us">
                    <Row>
                        <Col md={7}>
                            
                                <h1>Sobre Nosotros</h1>
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
                <div className="work-approach">
                <Row>
                    <Col>
                    <h1>Enfoque de trabajo</h1>
                    </Col>
                </Row>
                <Row>
                    <IndexCarousel/>
                </Row>
                </div>
                <Footer/>
                </Container>
            </>
        )
    }
}

export default HomeView;