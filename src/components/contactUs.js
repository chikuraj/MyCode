import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const MyContact = () => {
    
    const inititalValues = {
        name: '',
        email: '',
        message: ''
    }
    
    const [values, setValues] = useState(inititalValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // setting latest values from form fields to values 
    const handleChange = (e) => {
        const {name, value}=e.target;
        setValues({...values, [name]:value});
    };
    // submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
    };
    
    useEffect(()=>{
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit) {
            console.log(values);
        }
    }, [errors]);
    
    //validation here....this is very important
    const validate = (assessment) => {
        const err = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!assessment.name) {
            err.name = "Username is Required!"
        }else if(assessment.name.length < 3){
            err.name = "This user can not acceptable";
        }
        if(!assessment.email) {
            err.email = "Email is Required!"
        }else if(!regex.test(assessment.email)){
            err.email = "This is not a valid email formet!";
        }
        if(!assessment.message) {
            err.message = "message is Required!"
        }
        return err;
    }
        
    return (
        <>
            <Container>
                {
                Object.keys(errors).length === 0 && isSubmit ?(
                    <div>Message Successfully send !</div>
                ):(
                    <pre>{JSON.stringify(values,undefined,2)}</pre>
                )
                }
                <h1 style={{color:"#4b4b4b"}}>Contact Us...</h1>                
                <Form onSubmit={handleSubmit}>
                    <Row className="mt-4">
                        <Col>
                            <Form.Group >
                                <Form.Label for="Name">Enter Your Name</Form.Label>
                                <Form.Control id="Name" autoComplete="off" name="name" type="text" value={values.name} placeholder="Enter Your Name...."   onChange={handleChange}/>
                            </Form.Group>
                            <p>{errors.name}</p>
                        </Col>
                        <Col>
                            <Form.Group >
                                <Form.Label>Enter Your Email</Form.Label>
                                <Form.Control id="Email" autoComplete="off" name="email" type="email" value={values.email} placeholder="Enter Your email...."  onChange={handleChange}/>
                            </Form.Group>
                            <p>{errors.email}</p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Form.Group >
                                <Form.Label>Write Your Message Here !</Form.Label>
                                <Form.Control id="Message" autoComplete="off" name="message" value={values.message} rows={11} placeholder="Write Your Message........" type="message" as="textarea"  onChange={handleChange}/>
                            </Form.Group>
                            <p>{errors.message}</p>
                        </Col>
                        <Col>
                            <Image src="./work3.png" alt="contact us image" style={{width:"550px", height:"auto"}} />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button variant="success" type="submit" style={{marginLeft:"40%", width:"200px"}}>Submit Your Message</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}
export default MyContact;