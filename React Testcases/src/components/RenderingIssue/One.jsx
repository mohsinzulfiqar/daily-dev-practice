import React, { useCallback, useEffect, useState } from "react";

const One = () => {
    const [count, setCount] = useState(0);

    const logCount = useCallback(() => {
        console.log("Count is:", count);
    }, [count]);

    useEffect(() => {
        // const id = setInterval(logCount, 1000);
        // return () => clearInterval(id);
    }, [logCount]);

    useEffect(() => {
        // setCount((prev) => prev + 1);
    }, [count]);

    // return <button onClick={() => setCount(count + 1)}>Increment</button>;
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default One;
