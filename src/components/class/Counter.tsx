import { Component, ReactNode } from "react";

type CounterProps = {
    message : string
}
type CounterState = {
    count : number,
    status : string
}
export class CounterClass extends Component <CounterProps, CounterState>{   //we can include {} if there are no props
                                                                            // We can ignore the state if there is no state

    state = {
        count : 0,
        status : ''
    }
    handleIncerementClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1, status : 'incremented'}))
    }
    handleDecrementClick = () => {
        this.setState((prevState) => ({count: prevState.count - 1, status : 'decremented'}))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleIncerementClick}>Increment</button>
                <h3>{this.state.count} {this.state.status}</h3>
                <button onClick={this.handleDecrementClick}>Decrement</button>
            </div>
        )
    }
    }