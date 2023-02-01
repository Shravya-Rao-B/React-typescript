// Using use state with typescript when the initial value of state is not known

import { useState } from "react";

export const User = () => {
    const [user, setUser] = useState<AuthState | null>(null); //user is not logged in by default. Hence initializing with null
    const handleLogin = () => {
//if we do not specify user state's possible value as AuthState, typescript will infer null for user and throw error on trying to assign valid object values
//error: Argument of type '{ name: string; email: string; }' is not assignable to parameter of type 'SetStateAction<null>'.
// User's name can be null, hence while typing in line number 28, user.name will automatically come as user?.name. (called optional chaining)
//Removing the '?' (optional chaining) from line 28, 29 will give error that the value maybe null.
    setUser({
            name: "Shravya",
            email:"shravyar8@gmail.com"
        });
    }
    const handleLogout = () => {
        setUser(null);
    }
    type AuthState  = {
        name: string,
        email: string
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is - {user?.name}</div>     
            <div>User Email is - {user?.email}</div>
        </div>
    )
}