import React from "react";
import { useSelector } from "react-redux";
import {getItemSelector} from "../redux/slices/cartSlice";

const Cart = () => {

    const items = useSelector(getItemSelector);
    const total = items.reduce((a, b) => a + b.price, 0);  // The reduce mthod is use for add and multiply and other mathmatics solutions 

    return (
        <>
            <h3>Total Items: {items.length} (Rs. {total})/-</h3>
        </>
    );
}

export default Cart;