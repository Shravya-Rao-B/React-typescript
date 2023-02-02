import { useReducer } from "react";
/* A normal counter
import {useState} from 'react';
export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const counterAdd = () => {
        setCounter(prevState => prevState+1)
    }
    const counterMinus = () => {
        setCounter(prevState => prevState-1)
    }
    return (
        <div>
            <button onClick={counterAdd}>Increase</button>
            <p>{counter}</p>
            <button onClick={counterMinus}>Decrease</button>
        </div>
    )
}
*/

/* Counter with useReducer */
/* useReducer is similar to useState but is used to maintain multiple states.
The hook returns state and dispatch function
The implementatin is similar to Redux 
*/

type stateType = {
    counter : number   //changing the value of counter to anything other than number will throw error
}
type actionType = {
    type: string,    //changing the type to anything other than string throws error
    payload: number  //as above but type being number
   //payload is  optional for 'reset' action. But if we make payload optional here, it will error out for nicerement and decrement actions.
   //Check DescriminatedUnions.tsx for solution 
}
export const Counter = () => {
    const initialState = {counter : 0};
    const reducer = (state: stateType, action: actionType) => {
        switch (action.type) {
            case 'increment': return {counter: state.counter + action.payload};
            case 'decrement' : return {counter:state.counter - action.payload};
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={ () => dispatch({type:"increment", payload: 20})}>Increment</button> 
            <button onClick={() => dispatch({type:'decrement', payload: 10})}>Decrement</button>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}