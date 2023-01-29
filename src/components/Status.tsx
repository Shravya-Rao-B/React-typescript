/*
This is one way of defining type as String. But if we passed anything other than the three status, the code would nto throw error
as loong as we are passing string.

type StatusProps = {
    status : String
}
*/

//
type StatusProps = {
    status : "loading" | "success" | "error"
}
export const Status = (props : StatusProps) => {
    let message = props.status === "loading" ? "Loading..." : props.status === "success" ? "Data Processed Successfully!" :props.status === "error" ?  "Error Fetching Data" : "";
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}