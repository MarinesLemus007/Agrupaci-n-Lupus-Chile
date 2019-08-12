import React from "react";
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import "./styles/aboutUsView.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/BreadCrumb';
import agrupacionFachada from "../img/agrupacionFachada.jpg";
import IMG_0821 from "../img/IMG_0821.jpg";
import IMG_0842 from "../img/IMG_0842.jpg";
import Submit from '../components/Submit.js'

class AboutUs extends React.Component {
    render(){
        return (
            <div className="AboutUs">
                <Navbar state="about-us"/>
                    <Container>
                    <Breadcrumb name="¿Quiénes somos?"/>
                        <Row> 
                            <Col md={7} >
                            <div className="AboutUsfirth">   
                                <h1 className="definition-title">Quiénes somos</h1>  
                                <p>Agrupación Lupus Chile nace de la iniciativa de difundir en forma correcta nuestra enfermedad
                                    a la sociedad.
                                    A instancias de una madre que quiso mostrarle a su hija de 10 años recién diagnosticada con Lupus
                                    que hay más vida más allá del diagnóstico, se creó Lupus Chile el año 2008 en la comuna de Puente Alto.
                                    Ya en el año 2009 contábamos con un comodato para ubicarnos en nuestro lugar actual: al interior 
                                    del Complejo Hospital dr Sótero del Río, del Servicio de Salud Metropolitano Sur Oriente (SSMSO).
                                    Para el año 2010 ya teníamos un gran objetivo en mente: lograr la inclusión de #LupusAlAuge, 
                                    que se hizo realidad en julio del año 2013.
                                </p>
                            </div>
                            </Col>
                            <Col md={5} >
                                <div className="house">
                                    <img className="agrupacion" src={agrupacionFachada} alt="agrupacionFachada" />
                                </div> 
                            </Col> 
                        </Row>  
                        <Row>
                            <Col md={12} >  
                                <div  className="AboutUsSecond"> 
                                <h2 className="definition-subtitle">En qué estamos hoy?</h2>
                                    <p>Agrupación Lupus Chile busca ser una fuente continua de información y apoyo a los pacientes y 
                                        familiares que deben vivir con esta enfermedad, sobre todo en las primeras etapas luego del diagnóstico.
                                        Buscamos informar, para que el Lupus pueda ser reconocido por la sociedad y se me mejore
                                        el diagnóstico precoz de la enfermedad, esto significa menor compromiso de órganos y por lo tanto 
                                        mejor calidad de vida.
                                    </p>
                                </div>
                                <div  className="AboutUsSecond"> 
                                    <h2 className="definition-subtitle">Líneas de trabajo</h2>
                                    <p>Dentro de las líneas de trabajo de la Agrupación está que los pacientes de Lupus en Chile puedan:
                                        Tener un tratamiento de calidad y acceso oportuno
                                        Generar espacios de educación sobre la enfermedad
                                        Gestionar donaciones de medicamentos entre los pacientes y poder representar a los pacientes ante
                                        las formulación de políticas públicas en salud.
                                        En Agrupación Lupus Chile trabajamos para apoyar a los pacientes y a sus familias en el duro camino
                                        de la enfermedad, y queremos donde puedan compartir pacientes, familiares y amigos del Lupus 
                                        dando ayuda moral, y ser un oído a sus problemas.                     
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} >
                                <div className="AboutUsthird">
                                    <img className="agrupacion" src={IMG_0821} alt="img_0821" />
                                </div>
                            </Col> 
                            <Col md={6} >
                                <div>
                                    <img className="agrupacion" src={IMG_0842} alt="img_0842" />
                                </div>
                            </Col> 
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className='linksOfInterestTitle'>
                                <h2 className="definition-subtitle">Enlaces de interés</h2>
                                </div>    
                            </Col>
                        </Row>
                            <Row>
                            <Col sm={12}>
                                <div className='linksOfInterest'>
                                <p>Visita los siguientes links</p>
                                </div>    
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className='linksOfInterest'>
                                    <ul>
                                        <li><a href="/">Link 1</a></li>
                                        <li><a href="/Donar">Link 2</a></li>
                                        <li><a href="/Suscribe">Link 3</a></li>
                                    </ul>
                                </div>    
                            </Col>
                        </Row>
                        <Submit/>
                    </Container>
                     
                <Footer/>
                   
            </div>
        )
    }
}

export default AboutUs;