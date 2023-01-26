import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MyContact = () => {
    return (
        <>
            <Container>
                <h1>Contact Us...</h1>
                <Form action="/" method="POST">
                    <Row className="mt-4">
                        <Col>
                            <Form.Group controlId="formBasicName">
                                <Form.Label for="Name">Enter Your Name</Form.Label>
                                <Form.Control id="Name" name="name" type="text" placeholder="Enter Your Name...." required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Enter Your Email</Form.Label>
                                <Form.Control id="Email" name="email" type="email" placeholder="Enter Your email...." required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Write Your Message Here !</Form.Label>
                                <Form.Control id="Message" name="message" as="textarea" rows={5} placeholder="Write Your Message........" type="message" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button variant="success" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}
export default MyContact;