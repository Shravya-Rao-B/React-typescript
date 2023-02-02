import { useReducer } from "react";
type CounterType = {
    counter : number
}
/*
We could have a ActionType this way. But for reset we do not pass any payload.
Payload being mandatory it would error out at Reset dispacth function
if we make payload optional, then  at Increment and decrement cases typescript will warn us that payload might be undefined
In order to avoid this we need to have seperate type for reset.
type ActionType  = {
    type : "increment" | "decrement" | "reset"  
    payload: number
}
*/
type ResetAction = {
    type: 'reset'
}
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}
type CounterActionType = ResetAction | UpdateAction;  //This is called descriminated Unions which is recommended type for useReducer hook

const initialState = {counter : 0};
const reducer = (state : CounterType, action : CounterActionType) => {
    switch (action.type){
        case 'increment' : 
        return {counter : state.counter + action.payload}
        case 'decrement' :
        return { counter:state.counter - action.payload}
        case 'reset' :
        return initialState;
    }
}

export const DescriminatedUnions = () => {

    const [state,dispatch] = useReducer(reducer,initialState) // useReducer takes a reducer function and an optional initial value
    return (
        <div>
            <p>{state.counter}</p>
            <button onClick={() => dispatch({type:"increment", payload:10}) }>Increment</button>
            <button onClick={() => dispatch({type:"decrement", payload:10})}>Decrement</button>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}