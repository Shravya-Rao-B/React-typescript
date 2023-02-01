//Importing the type
import {PersonProps} from "../components/Person.types";
export const PersonImportType = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}