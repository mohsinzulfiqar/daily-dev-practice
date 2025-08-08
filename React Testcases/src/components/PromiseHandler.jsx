import { useRef } from "react";

const PromiseHandler = () => {
    const promiseResolver = useRef(null);
    const promiseRejector = useRef(null);

    const createPromise = async () => {
        const asd = await new Promise((resolve, reject) => {
            console.log("Promise Created!");
            promiseResolver.current = resolve;
            promiseRejector.current = reject;
        }).then(
            (value) => alert(`Resolved with: ${value}`),
            (error) => alert(`Rejected with: ${error}`)
        );
        console.log("&&&&&&&&&&&", asd);
    };

    const resolvePromise = () => {
        if (promiseResolver.current) {
            promiseResolver.current("Success!");
            promiseResolver.current = null; // Clean up
        }
    };

    const rejectPromise = () => {
        if (promiseRejector.current) {
            promiseRejector.current("Error!");
            promiseRejector.current = null; // Clean up
        }
    };

    return (
        <div>
            <button onClick={createPromise}>Create Promise</button>
            <button onClick={resolvePromise}>Resolve Promise</button>
            <button onClick={rejectPromise}>Reject Promise</button>
        </div>
    );
};

export default PromiseHandler;
