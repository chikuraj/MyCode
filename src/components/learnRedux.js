import { Button } from "react-bootstrap";
import React from "react";

const Counter = () => {
    return(
        <>
        <h1>0</h1>
        </>
    );
}


const LearnRedux = () => {
    return(
        <>
        <h2>Learn Redux with Raju</h2>
        <Button className="btnBtn" variant="info">INCREMENT</Button>
        <h2><Counter /></h2>
        <Button className="btnBtn" variant="info">DECREMENT</Button>
        </>
    );
}

export default LearnRedux;