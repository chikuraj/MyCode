import { useState } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import fakeUserData from "../Api";

const Auth = () => {
    const initialValues = {
        email: "",
        password: "",
        auth: "Signin"
    }

    const [values, setValues] = useState(initialValues);
    const [isSubmit, setIsSubmit]= useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };

    const addUser = (payload) =>{
        console.log(payload);
    };
    const removeUser = () =>{};
    const deleteUsers = () =>{};

    return (
        <>
            <Container>
                <h1>Please {values.auth} !</h1>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group >
                                <Form.Label for="email"><h5>Enter Your Email</h5></Form.Label>
                                <Form.Control id="email" autoComplete="off" name="email" type="email" value={values.email} placeholder="Enter Your Name...." onChange={handleChange} required={true} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group >
                                <Form.Label for="password"><h5>Enter Your password</h5></Form.Label>
                                <Form.Control id="password" autoComplete="off" name="password" type="password" value={values.password} placeholder="Enter Your password...." onChange={handleChange} required={true} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <Button type="submit" onClick={()=>authenticate()}>{values.auth}</Button> */}
                            <Button className="add_btn" onClick={()=>addUser(fakeUserData())}>Add User</Button>
                            <Button className="remove_btn" onClick={()=>removeUser()}>Remove User</Button>
                            <Button className="delete_btn" onClick={()=>deleteUsers()}>Delete User</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Auth;


/*OLD METHOD....
 const authenticate = () =>{
        if(values.auth==="signin"){
            //api call here 

        }else{
            dispatch(signinUser( [values.email, values.password]))
        }
        console.log(values);
    };
*/