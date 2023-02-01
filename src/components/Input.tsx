/* Input event hadler types passed as prop */
type inputProps = {
    value : string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: inputProps) => {
    return (
        <div>
            <input type="text" onChange={props.handleChange}/>
        </div>
    )
}