import React from 'react';
import lupus from '../img/lupus_ges_1.jpg';
import lupus_two from '../img/lupus_ges_2.jpg';
import './styles/bodyGes.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../components/BreadCrumb';
import Submit from '../components/Submit';

class BodyGes extends React.Component{

    render(){
        return (
            <>
            <section>
                <Container>
                    <BreadCrumb name="¿Qué es el Ges?" />
                    <Row>
                        <Col>
                            <div className='ges-line'>
                                <h1 className="ges-title">¿Qués es el Ges?</h1>
                            </div>    
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className='ges-line-two'>
                                <p>
                                    El GES es un régimen de Garantías Explícitas en Salud
                                    (antes llamado AUGE, Acceso Universal a Garantías de Salud)
                                    que comenzó a regir el año 2007 para dar respuesta a los
                                    problemas de salud que representan la mayor carga de enfermedad
                                    en el país, y opera para los beneficiarios y afiliados de los
                                    Sistemas de Salud de FONASA e Isapres.
                                </p>
                                <p>
                                    Contar con el GES significa, entre otras cosas, estar protegido en la enfermedad!
                                    Esto tiene especial importancia con la garantía de protección financiera para
                                    enfermedades crónicas como el Lupus, ya que es de un costo elevado por todo
                                    el amplio espectro de situaciones que puede pasar un paciente. Antes del GES,
                                    un paciente «leve» podía gastar desde $40.000 solamente por la Hidroxicloroquina,
                                    y hoy pagará no más de $3.320 por su medicamento y otras prestaciones. Asimismo,
                                    un paciente «grave», usando Hidroxicloroquina, Micofelonato y otros medicamentos,
                                    podía gasta desde los $250.000 y hoy no pagará más allá de $23.180.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='ges-img'>
                                <img src={lupus} className="img-container" alt="Lupus_Ges" />
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
                            <div className='ges-line-two'>
                                <h2 className="ges-subtitle">Qué son las canastas en el GES?</h2>
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
                            <div className='ges-line-two'>
                                <h2 className="ges-subtitle">No olvides tener presente:</h2>
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
                            <div className='ges-line-three'>
                                <h1 className="ges-title">Sigue leyendo</h1>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='ges-line-four'>
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
export default BodyGes;