import React from 'react';
import '../styles/lupusDefinitionView.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import img_def_1 from '../img/img_def_1.jpg';
import img_def_2 from '../img/img_def_2.jpg';
import img_def_3 from '../img/img_def_3.jpg';
import img_def_4 from '../img/img_def_4.jpg';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class LupusDefinition extends React.Component{

    render(){
        return (
            <>
            <NavBar/>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                <Breadcrumb.Item active href='/Que-es-el-lupus'>
                ¿Qué es el lupus?
                </Breadcrumb.Item>
                </Breadcrumb>
            <Container>
                <section className="definition-0">
                    <Row>
                        <Col>
                            <h1 className="definition-title">¿Qué es el Lupus?</h1>
                            <p>El Lupus es una enfermedad autoinmune, inflamatoria crónica sin cura.</p>
                        </Col>
                    </Row>
                </section>

                <section className="definition">
                    <Row>
                        <Col md={7} >
                                <h2 className="definition-subtitle">¿Cómo afecta al organismo?</h2>
                                <p>En un organismo con Lupus las defensas se confunden por una causa aún
                                    no del todo clara, desconociendo órganos y tejidos propios 
                                    (se auto-ataca). Este auto-ataque puede dañar articulaciones, piel, 
                                    riñones, corazón, pulmones, vasos sanguíneos y cerebro, atacando 
                                    potencialmente a cualquier órgano o sistema del cuerpo.
                                </p>
                        </Col>  
                        <Col md={5}>
                            <div className="img-container">
                                <Col>
                                    <img className="img-def-1" src={img_def_1} alt="Sobre Nosotros" />
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="definition">
                    <Row>
                        <Col md={5}>
                            <div className="img-container">
                                <Col>
                                    <img className="img-def-2" src={img_def_2} alt="Sobre Nosotros" />
                                </Col> 
                           </div>
                        </Col>
                        <Col md={7} >
                                <h2 className="definition-subtitle">¿Qué significa que la enfermedad sea crónica?</h2>
                                <p>Que la enfermedad sea crónica sin cura significa que los <strong>signos y síntomas tienden a 
                                    durar más de seis semanas</strong> y, a menudo durante muchos años, y que no tendremos una cura para 
                                    la enfermedad: desde el día en que nos diagnostiquen, tendremos que aprender a <strong>vivir con Lupus.</strong>
                                </p>
                        </Col>  
                    </Row>
                </section>

                <section className="definition">
                    <Row>
                        <Col md={7} >
                                <h2 className="definition-subtitle">¿Qué son los “brotes” y las “remisiones”?</h2>
                                <p>Los <strong>brotes</strong> o crisis son en períodos de activación donde habrá mayor presencia de síntomas o daño (inflamación, problemas 
                                renales, u otros). Las  <strong>remisiones</strong> en período de inactividad, podrán resultar en una ausencia de síntoma, pero debe tener en cuenta que la enfermedad sigue presente.
                                Esta ausencia de síntoma puede deberse al efecto de los medicamento, por lo que no sentir dolor, o no tener inflamación, no son motivos para dejar los medicamentos 
                                por iniciativa propia, <u>será el médico el que determinará si baja, modifica, mantiene o elimina un medicamento</u> en un período de inactividad.
                                </p>
                        </Col>  
                        <Col md={5}>
                            <div className="img-container">
                                <Col>
                                    <img className="img-def-2" src={img_def_3} alt="Sobre Nosotros" />
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="definition-2">
                    <Row>
                        <Col md={5}>
                            <div className="img-container">
                                <Col>
                                    <img className="img-def-2" src={img_def_4} alt="Sobre Nosotros" />
                                </Col> 
                           </div>
                        </Col>
                        <Col md={7} >
                                <h2 className="definition-subtitle">¿Cuáles son las causas del Lupus?</h2>
                                <p>
                                    La o las causas del Lupus son <strong>desconocidas</strong>. Mientras los científicos creen que existe una predisposición genética para la enfermedad, también es conocido 
                                    que los <u>factores ambientales tienen un papel muy importante</u> en la aparición del padecimiento. Algunos de estos factores ambientales son: infecciones, antibióticos, 
                                    (especialmente los derivados de las sulfas y penicilinas), la luz ultravioleta, el estrés en exceso, algunos medicamentos y hormonas.
                                </p>
                        </Col>  
                    </Row>
                </section>

                <section className="definition-3">
                    <Row>
                        <Col md={12}>
                            <p>Aunque es conocido que el Lupus se presenta en miembros de una misma familia, aun no se sabe si uno o varios genes son los responsables de la enfermedad. solo el <strong>10% de los pacientes con Lupus tiene un 
                            familiar</strong> cercano (padres o hermanos), <strong>que presenta o puede desarrollar Lupus.</strong> Las estadísticas señalan que sólo alrededor del <strong>5% de los hijos nacidos de pacientes con Lupus</strong>, tienen <strong>posibilidades de tener Lupus </strong>eventualmente.
                            El <strong>Lupus ocurre con mayor frecuencia en mujeres</strong> que en hombres. El aumento de los síntomas de la enfermedad antes y después de los periodos menstruales y/o durante el embarazo, apoya la creencia que las hormonas, 
                            particularmente los estrógenos, pueden en alguna forma regular la forma y el progreso de la enfermedad. 
                            </p>    
                        </Col>
                    </Row>
                </section>
                
                <section className="definition-2">
                    <Row>
                        <Col md={7} >
                                <h2 className="definition-subtitle">¿Cuales son los síntomas del Lupus?</h2>
                                <p>Los síntomas del Lupus varían enormemente de una persona a otra. Aunque el Lupus puede afectar 
                                    cualquier parte del organismo, la mayoría de las personas presentan síntomas solamente en algunos 
                                    órganos.A continuación la lista de los síntomas más comunes del Lupus y el porcentaje de pacientes 
                                    que los manifiestan:
                                </p>
                        </Col>  
                        <Col md={5}>
                            <div className="img-container">
                                <Col>
                                    <img className="img-def-2" src={img_def_1} alt="Sobre Nosotros" />
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="definition-3">
                    <Row>
                        <Col md={12}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Sintomas</th>
                                        <th>Porcentaje de casos</th>
                                    </tr>
                                    <tr>
                                        <td>Articulaciones dolorosas (Artralgia)</td>
                                        <td className="td-center">95%</td>
                                    </tr>
                                    <tr>
                                        <td>Temperaturas frecuentes de más de 37,5ºC</td>
                                        <td className="td-center">90%</td>
                                    </tr>
                                    <tr>
                                        <td>Artritis (Articulaciones hinchadas)</td>
                                        <td className="td-center">90%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </section>

                <section className="definition-2">
                    <Row>
                        <Col md={5}>
                            <div className="img-container">
                                <Col>
                                    <img className="img-def-2" src={img_def_1} alt="Sobre Nosotros" />
                                </Col> 
                           </div>
                        </Col>
                        <Col md={7} >
                                <h2 className="definition-subtitle">Tipos de Lupus</h2>
                                <p>Alrededor del mundo existen cerca de 5 millones de personas con algún tipo de Lupus, pero no todos tendrán el mismo tipo de Lupus.
                                </p>
                        </Col>  
                    </Row>
                </section>

                <section className="definition-3">
                    <Row>
                        <Col md={12}>
                            <ul className="definition-ul">
                                <li><h4>Lupus Eritematoso, inducido por medicamentos</h4>
                                    Este tipo de lupus se puede desarrollar después de haber ingeridos ciertos medicamentos. Los síntomas desaparecen en pocas semanas  o 
                                    meses al interrumpir el tratamiento y no llega a atacar órganos internos, pero se pueden presentar 
                                    inflamaciones en algunas zonas del cuerpo.
                                    Es un Lupus muy poco prevalente, y menos del 5% de todos los pacientes de Lupus tienen este tipo.
                                    </li><br></br>
                                <li><h4>Lupus Eritematoso cutáneo o Discoide</h4>
                                    Solo afecta a la piel y se le identifica por las ronchas, erupciones o eritemas que aparecen en la cara, cuello y piel del cuero cabelludo, o en zonas generalmente expuestas al sol.
                                    Lupus Eritematoso Cutáneo, y pueden tratarse con un Inmunodermatologo o Dermatólogo.
                                    </li><br></br>
                                <li><h4>Lupus Eritematoso sistémico (LES)</h4>
                                    Ataca a cualquier sistema u órgano del cuerpo, ya sea la piel, articulaciones, pulmones, sangre, vasos sanguíneos, corazón, riñones, hígado, cerebro y sistema nervioso.
                                    Cuando hablamos de “Lupus”, sin ponerle ningún apellido o calificador, nos estamos refiriendo a este tipo de Lupus.
                                    </li>
                            </ul>   
                        </Col>
                    </Row>
                </section>
                </Container>
                <Footer/>
            </>
        )
    }
}

export default LupusDefinition;