import React from 'react';
import law from '../img/law_one.jpg';
import lupus_two from '../img/lupus_ges_2.jpg';
import './styles/bodyGes.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../components/BreadCrumb';
import Submit from '../components/Submit';

class BodyLawRicarte extends React.Component{

    render(){
        return (
            <>
            <section>
                <Container>
                    <BreadCrumb name="Ley Ricarte Soto" />
                    <Row>
                        <Col>
                            <div className='law-line'>
                                <h1>Ley Ricarte Soto</h1>
                            </div>    
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className='law-line-two'>
                                <p>
                                    El pasado 15 de marzo el Ministero de Salud citó a varias organizaciones
                                    de pacientes para oficializar la decisión de las coberturas que estarán en
                                    el próximo cuarto decreto de la Ley Ricarte Soto, a partir del 1 de julio
                                    de este año.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='law-img'>
                                <img src={law} className="img-container" alt="Ley Ricarte Soto" />
                            </div> 
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={6}>
                            <div className='ges-img'>
                                <img src={lupus_two} className="img-container" alt="Canasta" />
                            </div> 
                        </Col>
                        <Col md={6}>
                            <div className='ges-line-three'>
                                <h2>Qué son las canastas en el GES?</h2>
                                <p>
                                    Las canastas son las prestaciones que están garantizadas y se reciben
                                    por el GES para un problema de salud determinado. Las canastas pueden
                                    estar compuestas de distintas prestaciones: medicamentos, consultas,
                                    exámenes, hospitalización o más. Se pagan en la medida que se usen,
                                    sea de forma parcial o total.
                                </p>
                                <p>
                                    <strong>La canasta de tratamiento mensual</strong> que uses dependerá de 
                                    cómo te catalogue tu médico respecto al Lupus, y del tiempo que llevas
                                    desde tu diagnóstico, y podrá ser Lupus Leve Primer Año, Lupus Leve a
                                    partir del Segundo Año, Lupus Grave Primer Año, y Lupus Grave a partir
                                    del Segundo Año.
                                </p>
                            </div>
                        </Col> 
                    </Row>

                    <Row>
                        <Col>
                            <div className='ges-line-four'>
                                <h2>No olvides tener presente:</h2>
                                <p>
                                   <p><strong>El GES solamente funciona para personas beneficiarias
                                       o afiliadas a Isapre o FONASA.
                                   </strong></p>
                                   Las personas que pertenecen a sistemas de salud de las Fuerzas
                                   Armadas (Dipreca, Capredena y otras), y quienes no estén registrados
                                   en ningún sistema, no tienen acceso a ello
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='ges-line-five'>
                                <h1>Sigue leyendo</h1>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='ges-line-six'>
                                <p>Visita los siguientes links</p>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='ges-line-seven'>

                                <ul>
                                    <li><a href="/#">Link 1</a></li>
                                    <li><a href="/#">Link 2</a></li>
                                    <li><a href="/#">Link 3</a></li>
                                </ul>

                            </div>    
                        </Col>
                    </Row>
                   <Submit/>     
                </Container>  
            </section>
            </>
        )
    }
}
export default BodyLawRicarte;