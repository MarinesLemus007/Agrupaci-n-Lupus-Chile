import React, { Component } from 'react';
import { Row , Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img_carousel_2 from '../img/img_carousel_0.jpg';
import img_carousel_1 from '../img/img_carousel_1.jpg';
import img_carousel_3 from '../img/img_carousel_2.jpg';
import img_carousel_4 from '../img/img_carousel_3.jpg';



class IndexCarousel extends Component {
    render() {
        return (
            <div className="index-carousel">
            <Carousel controls={false} wrap={true} interval={4000}>
            <Carousel.Item>
                    <Row>
                        <Col md={5}>
                            <img
                            className="d-block w-100"
                            src={img_carousel_2}
                            alt="First slide"
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="carousel-title">Importación de medicamentos</h2>
                            <p>Sabemos lo complejo que puede ser sobrellevar una enfermedad, y más aún, costearla.
                            Enfermedades crónicas como el Lupus significan constantes gastos en consultas médicas, exámenes y evaluaciones, terapias,
                            y medicamentos.</p>
                            <div className="div-read-more">
                                <a className="a-read-more" href="/ges">>Leer mas</a>
                                </div>
                        </Col>
                    </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                        <Col md={5}>
                            <img
                            className="d-block w-100"
                            src={img_carousel_1}
                            alt="First slide"
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="carousel-title">Apoyo a pacientes y familiares</h2>
                            <p>En Agrupación Lupus Chile trabajamos para apoyar a los pacientes y a sus familias en el duro camino de la enfermedad, y queremos donde puedan compartir pacientes, 
                                familiares y amigos del Lupus dando ayuda moral, y ser un oído a sus problemas.
                            </p>
                                <div className="div-read-more">
                                <a className="a-read-more" href="/Quienes-somos">>Leer mas</a>
                                </div>
                        </Col>
                    </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                        <Col md={5}>
                            <img
                            className="d-block w-100"
                            src={img_carousel_3}
                            alt="First slide"
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="carousel-title">Defensa de derechos</h2>
                            <p>La Agrupación trabaja para que los pacientes puedan tener un tratamiento de calidad; generar espacios de educación sobre la enfermedad; gestionar donaciones de medicamentos y poder 
                                representar a los pacientes ante las formulación de políticas públicas en salud.</p>
                                <div className="div-read-more">
                                <a className="a-read-more" href="/Quienes-somos">>Leer mas</a>
                                </div>
                        </Col>
                    </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                        <Col md={5}>
                            <img
                            className="d-block w-100"
                            src={img_carousel_4}
                            alt="First slide"
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="carousel-title">Educación</h2>
                            <p>Como todos los años, el mes de Mayo es el mes del Lupus, y el día 10 es el #DiaMundialDelLupus, 
                                donde todas las organizaciones de pacientes del mundo están invitadas a participar en la difusión de la enfermedad y en la creación de conciencia.</p>
                                <div className="div-read-more">
                                <a className="a-read-more" href="/Quienes-somos">>Leer mas</a>
                                </div>
                        </Col>
                    </Row>
            </Carousel.Item>
            </Carousel>
            </div>

            );
}
}
export default IndexCarousel;