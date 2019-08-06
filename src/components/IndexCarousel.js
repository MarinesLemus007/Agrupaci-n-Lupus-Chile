import React, { Component } from 'react';
import { Row , Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img_carousel_1 from '../img/paciente.jpg';



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
                            src={img_carousel_1}
                            alt="First slide"
                            />
                        </Col>
                        <Col md={7}>
                            <h2 className="carousel-tittle">Titulo</h2>
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
                            <h2 className="carousel-tittle">Titulo</h2>
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