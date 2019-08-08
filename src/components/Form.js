import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './styles/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormSubmit extends React.Component{

    render(){
        return (
            <Container> 
                <Form>
                    <Row>  
                        <Col  sm={4}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control placeholder="Nohemí Martínez" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="ejemplo@correo.com" />
                            </Form.Group>
                        </Col>
                         <Col  sm={4}>
                            <Form.Group>
                                <Form.Label></Form.Label>
                                <Button variant="primary" type="submit">Inscribete</Button>
                            </Form.Group>
                        </Col>
                    </Row>    
                </Form> 
            </Container> 
        )
    }
}
export default FormSubmit;