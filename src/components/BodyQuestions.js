import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../BodyQuestions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSubmit from '../components/Form';

class BodyQuestions extends React.Component{

    render(){
        return (
            <section>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='line-one-questions'>
                                <p>Inicio > Preguntas frecuentes></p>
                            </div> 
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='line-two-questions'>
                                <h1>Preguntas frecuentes</h1>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='line-three-questions'>
                                <h3>
                                    ¿Tienes alguna duda? Aquí encontrarás un listado de todas las
                                    preguntas que constantemente recibimos. Si no encontraste clo
                                    que buscabas, por favor no dudes en enviarnos un mail a
                                    contacto@agrupacionlupuschile.cl o llamanos al +56 9 93058454 
                                    Recuerda que tenemos oficina en Hospital Sótero del Río Av.
                                    Concha y Toro 3459, Puente Alto, Santiago. horario de atencion
                                    solo los viernes en la tarde, agendando previamente tu visita
                                    con nosotros.
                                </h3>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col  sm={12}>
                        <div className='line-four-questions'>
                            <h2>¿Pregunta 1?</h2>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='line-five-questions'>
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
                        <Col sm={12}>
                        <div className='line-six-questions'>
                            <h2>¿Pregunta 2?</h2>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='line-seven-questions'>
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
                        <Col sm={12}>
                            <div className='line-eight-questions'>
                                <h2>¿Pregunta 3?</h2>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col  sm={12}>
                        <div className='line-nine-questions'>
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
                        <Col sm={12}>
                            <div className='line-ten-questions'>
                                <h1>¡Recibe nuestro boletín de noticias!</h1>
                            </div>    
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <div className='line-eleven-questions'>
                                <h3>
                                    En el mundo constantemente se lleban a cabo nuevos estudios
                                    y descubrimiento hacerca del Lupus y todos sus tipos.
                                    Te invitamos a mantenerte informado con nuestro Boletín
                                    que periodicamente publicamos. En el  podras encontrar
                                    información relevante sobre el Lupus y nuestra comunidad.
                                    ¡Inscribete! es gratis. 
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <FormSubmit/>
            </section>
        )
    }
}
export default BodyQuestions;