import React from "react"
import './person-details.scss'
import SwapiService from "../../services/swapi";

export default class PersonDetails extends React.Component{

    swapiService = new SwapiService()

    state={
        person: null
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personID){
            this.updatePerson()
        }
    }

    updatePerson(){
        const {personId} = this.props
        if(!personId){
            return
        }

        this.swapiService
            .getPerson(personId)
            .then((person)=>{
                this.setState({person})
            })
    }

    render() {

        if(!this.state.person){
            return <span>Selected a person from a list</span>
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person

        return(
            <div className={'planet-details card'}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="character"/>
                <div className={'card-body'}>
                    <h4>{name}</h4>
                    <ul className={'list-group list-group-flush'}>
                        <li className={'list-group-item'}>
                            <span className={'term'}>
                                Gender
                            </span>
                                <span>: {gender}</span>
                        </li>
                        <li className={'list-group-item'}>
                            <span className={'term'}>
                                Birth Year
                            </span>
                            <span>: {birthYear}</span>
                        </li>
                        <li className={'list-group-item'}>
                            <span className={'term'}>
                                Eye Color
                            </span>
                            <span>: {eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

