//Using array type in typescript
//The below is an array names, having objects as its elements, each object having properties first and last of type string.
type PersonlistProps = {
    names : {
        first : String
        last  : String
    }[]
}
export const PersonList = (props: PersonlistProps) => {
return (
    <div>
        {props.names.map((name, index) => {
            return (
                <h1 key={index}>{name.first} {name.last}</h1>
            )
        })}
    </div>
)
}