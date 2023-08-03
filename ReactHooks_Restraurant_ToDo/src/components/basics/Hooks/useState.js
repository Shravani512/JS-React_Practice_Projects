import React, { useState } from "react";
import "./style.css";

let num = 0;
const UseState = ({ }) => {
    const initialData = 0;
    const [num, setCounter] = useState(initialData);
    const Incr = () => {
        return setCounter(num + 1);
    }
    const Decr = () => {
        if (num === 0) return setCounter(0);
        return setCounter(num - 1);
    }
    return (
        <>
            <div className="center_div">
                <p>{num}</p>
                <div class="button2" onClick={Incr}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onClick={Decr}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}
export default UseState;
