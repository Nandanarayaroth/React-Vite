import { people } from "./data"
import {getImageUrl} from "./utilities"

function Parent() {

    const chemists = people.filter(person => 
        person.profession === 'chemist'
    )
    const listItems = chemists.map(person => 
        <li key={person.id}>
            <img 
            src={getImageUrl(person)} 
            alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' '+ person.profession +' '}
                known for {person.accomplishment}
            </p>
        </li>
    )
    const nonChemist = people.filter(person => person.profession !== 'chemist')
    const secondList = nonChemist.map(person => 
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}: </b>
                {' '+ person.profession+ ' '}
                known for {person.accomplishment}
            </p>
        </li>
    )
    return (
        <div>
            <h3>Chemisist</h3>
            <ul>{listItems}</ul>
            <h4>Non Chemisist</h4>
            <ul>{secondList}</ul>
        </div>
    )
}

export default Parent