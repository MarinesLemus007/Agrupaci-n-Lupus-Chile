import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';



class Submit extends React.Component {
    render(){
        return (
            <div className="Submit">
            <NavBar/>

                <Breadcrumb>
                <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                <Breadcrumb.Item href='/Quienes-Somos'>
                Quiénes Somos?
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Quiénes Somos?</Breadcrumb.Item>
                </Breadcrumb>

<Form>
                            <div className="Submit" >                         
                                <h3>Sé el primero en enterarte de nuestras noticias y eventos , Suscribete</h3> 
                                <Row>                         
                                    <div className="form-group col-md-5">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="Username" placeholder="Username" />
                                            <Form.Text className="text-muted">
                                                Nunca compartiremos tus datos personales.
                                            </Form.Text>
                                        </Form.Group>
                                    </div>

                                    <div className="form-group col-md-5">
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="Email address" placeholder="Email address" />
                                        </Form.Group>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <Button className ="submit"type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Row>
                            </div>
                        </Form>
                         <Footer/>
                         </div>
        )}}


        
export default Submit;