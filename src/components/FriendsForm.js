import React from "react";
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import "../styles/FriendsForm.css"
// import facebook_white from "../img/iconosPng/facebook_white.png";



class FriendsForm extends React.Component {
    render(){
        return (
            <Container fluid>
            <div className="FriendForm">
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
           
            </div>
            </Container>
        )}}
        export default FriendsForm;