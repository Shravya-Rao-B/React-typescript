// Style types
// Need to use the built in React style type for CSS
// If the style properties are incorrect, typescript will error out (in App.tsx)
// If the value passed for the css properties are incorrect, typescript will error out (in App.tsx)
type ContainerProps = {
    styles : React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}