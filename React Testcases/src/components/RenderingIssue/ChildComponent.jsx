import React, { memo } from "react";
import SecondChildComponent from "./SecondChildComponent";
import { useSelector } from "react-redux";

const ChildComponent = () => {
    const asd = useSelector((state) => state.counter?.value);
    console.log("Child Rendered");

    return (
        <div>
            Data:{asd}
            <SecondChildComponent />
        </div>
    );
};

export default memo(ChildComponent);

// import React, { memo } from "react";

// const ChildComponent = ({ data }) => {
//     console.log("Child Rendered");

//     return <div>Data: {JSON.stringify(data)}</div>;
// };
// (prevProps, nextProps) => JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)

// export default memo(ChildComponent);
// export default memo(ChildComponent, (prevProps, nextProps) => {
//     console.log("&&&&&&&&&&&", prevProps);
//     console.log("&&&&&&&&&&&", nextProps);
//     return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data);
// });
