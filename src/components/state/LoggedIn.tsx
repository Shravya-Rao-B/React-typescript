//USestate with typescript inference
import {useState} from "react";

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //Here typescript infers the type of isLoggedIn to be Boolean
    const handleLogin = () => {
        setIsLoggedIn(true);   // setIsLoggedIn(1) will error out though it is a truthy value as its not Boolean
    }
    const handleLogout = () => {
        setIsLoggedIn(false)  // setIsLoggedIn(0) will error out though it is a falsy value as its not Boolean
    }
    return (
        <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
        <p>{isLoggedIn? 'logged in' : 'logged out'}</p>
        </div>
    )
}