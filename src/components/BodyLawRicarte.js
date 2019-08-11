import React from 'react';
import law from '../img/law_one.jpg';
import law_two from '../img/law_two.jpg';
import './styles/bodyLawRicarte.css';
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
                                <h1 className="law-title">Ley Ricarte Soto</h1>
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
                                <p>
                                    La Ley Ricarte Soto, a diferencia del GES que solamente opera para pacientes
                                    de Fonasa e Isapres, va a cubrir a todo paciente que sea Fonasa, Isapre o
                                    afiliado o beneficiario de los sistemas de salud de las Fuerzas Armadas y de Orden.
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
                            <div className='law-img'>
                                <img src={law_two} className="img-container" alt="¿Cómo funciona LRS?" />
                            </div> 
                        </Col>
                        <Col md={6}>
                            <div className='law-line-two'>
                                <h2 className="law-subtitle">¿Cómo funciona el sistema de la Ley Ricarte Soto?</h2>
                                <p>
                                    <strong>Esta cobertura operará para pacientes que ya tengan
                                    diagnóstico confirmado de Lupus Eritematoso Sistémico.
                                    </strong>Sin embargo, esos pacientes no solamente deben tener
                                    Lupus Eritematoso Sistémico, sino que deben tener manifestaciones
                                    articulares o dermatológicas.
                                </p>
                                <p>
                                    Además, aparte de ser pacientes de Lupus Eritematoso Sistémico,
                                    solamente con manifestaciones articulares o dermatológicas,
                                    deben ser refractarios a tratamiento convencional, es decir,
                                    que el tratamiento habitual para este tipo de síntomas
                                    (Hidroxicloroquina, Metotrexato, Corticoides u otros) no ha dado
                                    efecto en al menos 6 meses de uso, y los síntomas aún no logran controlarse.
                                </p>
                            </div>
                        </Col> 
                    </Row>

                    <Row>
                        <Col>
                            <div className='law-line-two'>
                                <h2 className="law-subtitle">¿Qué es lo que está cubierto por la Ley Ricarte Soto?</h2>
                                <p>
                                    <strong>La Ley Ricarte Soto cubre solamente el medicamento.</strong>
                                    Ni la aplicación en un centro médico, ni los exámenes de seguimiento.
                                    Para obtener la gratuidad del medicamento, Belimumab debe ser aplicado
                                    en la red de prestadores determinada por el seguro de salud: el Hospital
                                    Base que corresponda, la clínica con convenio o el hospital institucional.
                                    Si accedes a Belimumab con otro médico, o en otra parte, deberás pagar su costo.
                                    La aplicación de Belimumab quedará sujeta a cobertura de tu sistema de salud,
                                    dependiendo del plan o modalidad con la que se cuenta.
                                </p>
                                <p>
                                    Los exámenes de seguimiento, si bien no están incluidos, están disponibles
                                    en las canastas del GES para quienes usan esas garantías siendo de Fonasa
                                    o Isapre. Quienes pertenezcan a los sistemas de salud de las Fuerzas Armadas
                                    y de Orden, deberán costearlos como siempre.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='law-line-three'>
                                <h1 className="law-title">Sigue leyendo</h1>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='law-line-four'>
                                <p>Visita los siguientes links</p>
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