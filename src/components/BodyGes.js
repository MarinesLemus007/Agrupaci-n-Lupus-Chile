import React from 'react';
import law from '../img/derechos.jpg';
import '../GesView.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../components/BreadCrumb';

class BodyGes extends React.Component{

    render(){
        return (
            <section>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='line-migas'>
                                <p> <BreadCrumb/> </p>
                            </div>    
                        </Col>
                    </Row>
               
                    <Row>
                        <Col sm={12}>
                            <div className='ges-line'>
                                <h1>¿Qués es el Ges?</h1>
                            </div>    
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <div className='ges-line-two'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                     culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='ges-img'>
                                <img src={law} className="img-container" alt="Derechos" />
                            </div> 
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col sm={4}>
                            <div className='ges-img'>
                                <img src={law} className="img-container" alt="Derechos" />
                            </div> 
                        </Col>
                        <Col sm={8}>
                            <div className='ges-line-three'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                     culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={8}>
                            <div className='ges-line-four'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                     culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='ges-img'>
                                <img src={law} className="img-container" alt="Derechos" />
                            </div> 
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='ges-line-five'>
                                <h1>¿Tienes más dudas?</h1>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='ges-line-six'>
                                <p>Visita el siguiente link</p>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='ges-line-seven'>

                                <lu>
                                    <li><a href="/#">Link 1</a></li>
                                    <li><a href="/#">Link 2</a></li>
                                    <li><a href="/#">Link 3</a></li>
                                </lu>

                            </div>    
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default BodyGes;