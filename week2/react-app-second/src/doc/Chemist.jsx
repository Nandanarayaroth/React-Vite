import { people }  from "./ChemistData"
import { getImgUrl } from "./ChemistImg"

export default function Chemist() {

    const chemists = people.filter(person => 
        person.profession === "chemist"
    )

    const listItems = chemists.map(person => (
        <li key={person.id}>
            <img 
                src={getImgUrl(person)}
                alt={person.name}
            />

            <p>
                <b>{person.name} :</b>
                { ' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    ))

    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}
