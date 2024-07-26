import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    
    const [amount, setAmount] = useState(0);
    const addValue = Number(amount)  || 0;

    const resetAll = () => {
        setAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div>
                <button onClick={() => dispatch(resetAll)}>Reset</button>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add by Amount</button>
            </div>
        </section>
    )
}

export default Counter;