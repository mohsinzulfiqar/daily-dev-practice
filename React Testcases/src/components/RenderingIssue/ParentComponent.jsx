import { useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../redux/counterSlice";

const ParentComponent = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [userList, setUserList] = useState({ name: "John", age: 30 });

    const data = useMemo(() => userList, [userList]); // Added dependency

    const handleUser = () => {
        setUserList((prev) => ({
            ...prev,
            name: Math.random().toString(36).substring(7), // Generates random string
            id: Math.floor(Math.random() * 1000), // Generates random number
        }));
        dispatch(saveUserData(userList));
    };

    // const data = { name: "John", age: 30 };
    // const largeObject = {};
    // const propertyCount = 10000; // Adjust as needed, but be careful!

    // for (let i = 0; i < propertyCount; i++) {
    //     largeObject[`property_${i}`] = `value_${i}`;
    // }

    // console.log("Large object created successfully.");
    // console.log(Object.keys(largeObject).length);
    // const largeArray = [];
    // for (let i = 0; i < 10000; i++) {
    //     largeArray.push(`value_${i}`);
    // }
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleUser}>Add New User</button>
            <p>Count: {count}</p>
            <ChildComponent count={count} />
        </>
    );
};

export default ParentComponent;
