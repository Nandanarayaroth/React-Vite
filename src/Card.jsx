import react from './assets/react.svg'

function Card() {

    return(
        <div className="card">
            <img className='card-image' src={react} alt="Profile pic"></img>
            <h2 className='card-title'>Bro code</h2>
            <p className='card-text'>I make YOutube vidoes and play video games</p>
        </div>
    )
}

export default Card