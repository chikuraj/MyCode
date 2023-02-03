import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {addItem} from "../redux/slices/cartSlice";

const Product = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <section>

                <Card style={{width:"250px",margin:"19px",border: "3px solid green", height:"auto"}}>
                    <Card.Img src={props.image} alt={props.productName} />
                    <Card.Body>
                        <Card.Title>{props.productName}</Card.Title>
                        <Card.Text>{props.price}/-</Card.Text>
                        <Button variant="primary" onClick={e => dispatch(addItem({name:props.productName, price:props.price}))}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
}

export default Product;