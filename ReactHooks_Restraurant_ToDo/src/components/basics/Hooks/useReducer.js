import React, { useReducer, useEffect } from "react";
import "./style.css";

//use Effect runs after every render
//useEffect should be used on top level of hirarchy 

const reducer = (state, action) => {
    if (action.type === "Incr") { state = state + 1; }
    if (action.type === "Decr") {
        if (state === "0") {
            state = 0;
        }
        else {
            state = state - 1;
        }

    }
    return state;
}

let num = 0;
const UseReducer = ({ }) => {
    const initialData = 0;

    const [state, dispatch] = useReducer(reducer, initialData);

    useEffect(() => {
        document.title = `chats(${state})`;
    })
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({ type: "Incr" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onClick={() => dispatch({ type: "Decr" })}>
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
export default UseReducer;
