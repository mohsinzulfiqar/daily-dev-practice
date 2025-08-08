import React, { memo } from "react";
import { useSelector } from "react-redux";

const SecondChildComponent = () => {
    const asd = useSelector((state) => state.counter?.users);
    console.log("Second Child Render", asd);
    return (
        <div>
            SecondChildComponent <br></br>
            <b>{asd?.name}</b>
        </div>
    );
};

export default memo(SecondChildComponent);
