import React from "react";
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./styles/friendsForm.css"
// import facebook_white from "../img/iconosPng/facebook_white.png";



class FriendsForm extends React.Component {
    render(){
        return (
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item href='/FriendsForm'>
                    Contáctanos
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Contáctanos</Breadcrumb.Item>
                </Breadcrumb>

                <div className="FriendForm">
                    <h1>Contáctanos</h1>
                    <p>En agrupación Lupus, siempre serán bien recibidas todos los tipo de ayuda, ya sea si quieres aportar con trabajo o con aporte monetario, según sea el caso, llena los siguientes formularios</p>
                    <h2>Aporte monetario</h2> 
            
            
                <Form>
                    <div className="monetaryContribution">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridfirstName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="firstName" placeholder="Ingrese su nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="lastName" placeholder="Ingrese su apellido" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control type="bday" placeholder="01/02/1960" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label>Rut</Form.Label>
                                <Form.Control type="Id" placeholder="xxxxxxxx-x" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group as={Row}>
                            <Col sm={6}>
                                <Form.Label as="legend" column sm={12}>
                                    Autorizo el deposito mensual de:
                                </Form.Label>
                                <Col sm={6}>
                                    <Form.Check
                                    type="radio"
                                    label="$2000"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="$5000"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="$10000"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="$20000"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="$50000"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Col>
                        
                            <Col sm={6}>
                                <Form.Group as={Col} controlId="formGridaddress">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control type="address" placeholder="Ingrese su calle número y Comuna" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control type="phone" placeholder="9 xxxxxxxx" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="email" placeholder="Ingrese su correo " />
                                </Form.Group>
                                <Button className="btn" type="button">
                                    Donar
                                </Button>
                            </Col>
                        </Form.Group>
                    </div>

                    <div className="timeContribution"> 
                        <h2>Apórtanos con tu trabajo </h2>
                    <Form.Row>
                            <Form.Group as={Col} controlId="formGridfirstName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="firstName" placeholder="Ingrese su nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="lastName" placeholder="Ingrese su apellido" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control type="bday" placeholder="01/02/1960" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label>Rut</Form.Label>
                                <Form.Control type="Id" placeholder="xxxxxxxx-x" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridfirstName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="firstName" placeholder="Ingrese su nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="lastName" placeholder="Ingrese su apellido" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridprofession">
                                <Form.Label>Profesión</Form.Label>
                                <Form.Control type="profession" placeholder="Ej: Sicólog@" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridavailabilityn">
                                <Form.Label>Dispoibilidad</Form.Label>
                                <Form.Control type="availability" placeholder="Ej: Lunes entre las 12:00 y las 17:00" />
                            </Form.Group>
                        </Form.Row>
                        <Button className="btn" type="button">
                            Participa
                        </Button>
                    </div>
                </Form>
            </div>
            
        </Container>
    )}
}
    export default FriendsForm;