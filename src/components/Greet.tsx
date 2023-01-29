/* In Javascript, but ts would give an error that props is of type any
export const Greet = (props) => {
return (
    <div>
        <h2>Welcome ${props.name} You have 10 unread messages</h2>
    </div>
)
}
*/

/* 
Benifits of typescript:
1. As we type props. we will see typescript suggesting name. So we need not worry if the it was name or fname or lname etc
2. In App.tsx , when invoking the Greet component, if we pass any other type of data to name prop apart from string, 
ts will throw error
<Greet name={1234}/> // type number is not assignable to type string
3. If we have 3 props in the type object and only 2 props are present in invokation 
(if we passed no messageCount in App.js, there will be error)
*/
type GreetProps  = {
name: string
messageCount : number //using number type in typescript
isLoggedIn: boolean   //using Boolean type in typescript
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>{props.isLoggedIn ?  `Welcome ${props.name} You have ${props.messageCount} unread messages` : `welcome guest` }</h2>
        </div>
    )
    }