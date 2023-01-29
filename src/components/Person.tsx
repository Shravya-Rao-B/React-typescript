//If noraml javascript 
/*
export const Person = () => {
    return (
        <div>Shravya Rao B</div>
    )
}
*/
// using object type in typescript
type Person = {
    name : {
    first: String
    last :  String
    }
}

export const Person = (props: Person) => {
    return (
        <div>{props.name.first}  {props.name.last}</div>
    )
}