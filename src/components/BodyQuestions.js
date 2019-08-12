import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './styles/bodyQuestions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Submit from '../components/Submit';
import BreadCrumb from '../components/BreadCrumb';

class BodyQuestions extends React.Component{

    render(){
        return (
            <section>
                <Container>
                <BreadCrumb name="Preguntas Frecuentes" />
                    <Row>
                        <Col>
                            <div className='questions-line'>
                                <h1 className="questions-title">Preguntas frecuentes</h1>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='questions-line-two'>
                                <p>
                                    ¿Tienes alguna duda? Aquí encontrarás un listado de todas las
                                    preguntas que constantemente recibimos. Si no encontraste clo
                                    que buscabas, por favor no dudes en enviarnos un mail a
                                    contacto@agrupacionlupuschile.cl o llamanos al +56 9 93058454 
                                    Recuerda que tenemos oficina en Hospital Sótero del Río Av.
                                    Concha y Toro 3459, Puente Alto, Santiago. horario de atencion
                                    solo los viernes en la tarde, agendando previamente tu visita
                                    con nosotros.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <div className='questions-line-two'>
                            <h2 className="questions-subtitle">¿Es el Lupus un tipo de cancer?</h2>
                            <p>
                                El Lupus no es  cáncer. El cáncer es una enfermedad de los
                                tejidos anormales, malignos que crecen rápidamente y se
                                diseminan a los tejidos circundantes. El Lupus es una
                                enfermedad autoinmune, como se describió anteriormente.
                            </p>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <div className='questions-line-two'>
                            <h2 className="questions-subtitle">¿Es es Lupus una enfermedad mortal?</h2>
                            <p>
                                La mayoría de las personas con Lupus pueden llevar una
                                vida plena siguiendo al pie de la letra las instrucciones
                                de su médico tratante y teniendo una correcta adherencia
                                a los tratamientos (se reporta cerca de un 90% de éxito terapéutico).
                            </p>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='questions-line-two'>
                                <h2 className="questions-subtitle">¿Qué tan común es el lupus y a quién afecta?</h2>
                                <p>
                                    Se cree que más de 5 millones de personas en todo el mundo
                                    padecen algún tipo de Lupus. En su mayoría, los afectados por
                                    Lupus son mujeres en edad fértil (15 a 44), sin embargo, los
                                    hombres y niños también pueden padecerlo.
                                </p>
                            </div>    
                        </Col>
                    </Row>
                    <Submit/> 
                </Container>
            </section>
        )
    }
}
export default BodyQuestions;