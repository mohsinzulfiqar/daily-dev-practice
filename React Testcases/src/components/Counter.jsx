// src/components/Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const count = state?.counter?.value;
    return (
        <div>
            <h1 style={{ color: "red" }}>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            {/* <button onClick={() => dispatch(increment(5))}>Increment</button> */}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
