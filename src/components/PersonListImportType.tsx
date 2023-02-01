import {PersonListProps} from '../components/Person.types'
export const PersonListImportType = (props: PersonListProps) => {
    return (
        <div>
        {props.names.map((name,index) => {
            return (
            <h1 key={index}>{name.first} {name.last}
            </h1>
            )
        })
        }
        </div>
    )
}