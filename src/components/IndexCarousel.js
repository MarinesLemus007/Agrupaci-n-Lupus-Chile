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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                            <h2 className="carousel-title">Defenza de derechos</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </Col>
                    </Row>
            </Carousel.Item>
            </Carousel>
            </div>

            );
}
}
export default IndexCarousel;