import { useEffect, useReducer, useState } from "react";
import "./styles.css";

const initialstate = { val: 0 };
function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return { val: state.val + 2 };
        case "decrease":
            return { val: state.val - 2 };
        case "reset":
            return { val: (state.val = 0) };
        default:
            return { val: state.val };
    }
}

export default function Perform() {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    }, [state.val]);

    return (
        <>
            <div className="timesrendered">
                <p>rendered {count} times</p>
            </div>
            <div className="container">
                <div className="value">
                    <h1>VALUE</h1>
                    <h1>{state.val}</h1>
                </div>

                <div className="operations">
                    <button onClick={() => dispatch({ type: "increase" })}>
                        <strong>+ 2</strong>
                    </button>
                    <button onClick={() => dispatch({ type: "decrease" })}>
                        <strong>- 2</strong>
                    </button>
                    <button onClick={() => dispatch({ type: "reset" })}>
                        <strong>reset</strong>
                    </button>
                </div>
            </div>
        </>
    );
}
