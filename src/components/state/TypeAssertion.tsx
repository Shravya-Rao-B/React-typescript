// Using use state with typescript when the initial value of state is not known

import { useState } from "react";

export const User = () => {
    //When we are aware that the state is going to be initialized after mounting, then we can initialize value as below.
    const [user, setUser] = useState<AuthState>({} as AuthState) //Here we are initializing an empty object of type Authstate
    const handleLogin = () => {
    setUser({
            name: "Shravya",
            email:"shravyar8@gmail.com"
        });
    }
    const handleLogout = () => {
        setUser({} as AuthState);
    }
    type AuthState  = {
        name: string,
        email: string
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is - {user.name}</div>     
            <div>User Email is - {user.email}</div>
        </div>
    )
}