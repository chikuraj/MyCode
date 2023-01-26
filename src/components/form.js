import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const MyForm = () => {

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email..." />
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter the Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password..." />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
console.log(Form.Control);
export default MyForm;