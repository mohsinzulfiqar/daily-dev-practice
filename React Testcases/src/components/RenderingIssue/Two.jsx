import { memo, useCallback, useState } from "react";

export default function Two() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, [count]);

    return (
        <div>
            <Child onClick={handleClick} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

const Child = memo(({ onClick }) => {
    console.log("Child rendered");

    return <button onClick={onClick}>Click</button>;
});
