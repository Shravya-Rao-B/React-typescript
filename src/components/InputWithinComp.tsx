//Having onchange event handler as part of the same component
import React from "react"

type InputWithinComp = {
    value : string
    handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const InputwithinComp = () => { 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return (
        <input type="text" onChange={handleInputChange}/>
    )
}