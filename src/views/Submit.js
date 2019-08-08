import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import "../styles/Submit.css";



class Submit extends React.Component {
    render(){
        return (
            <div className="Submit">
                <Form>
                    <div className="Submit" >                         
                        <h3>¡Recibe nuestro boletín de noticias!</h3> 
                        <p>En el mundo constantemente se lleban a cabo nuevos estudios y descubrimiento hacerca del Lupus y todos sus tipos. Te invitamos a mantenerte informado con nuestro Boletín que periodicamente publicamos. En el  podras encontrar información relevante sobre el Lupus y nuestra comunidad. ¡Inscribete! es gratis.</p>
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
            </div>
        )
    }
}


        
export default Submit;