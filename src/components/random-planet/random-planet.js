import React from "react"
import './random-planet.scss'
import SwapiService from "../../services/swapi";
import {Spiner} from "../spiner/spiner";

class RandomPlanet extends React.Component{
    swapiService = new SwapiService()
    state={
        planet: {},
        loading: true
    }

    // componentDidMount() {
    //     this.updatePlanet()
    //     this.interval = setInterval(this.updatePlanet, 5000)
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.interval)
    // }

    onPlanetLoaded=(planet)=>{
        this.setState({planet,
                            loading: false
        })
    }

    updatePlanet =()=>{
        const id = Math.floor(Math.random()*25) + 2
        this.swapiService.getPlanets(id)
            .then(this.onPlanetLoaded)
    }

    render(){
        const { planet, loading }= this.state
        const spinner = loading ? <Spiner/> : null
        const content = !loading ? <PLanetView planet={planet}/> : null
    return (
        <div className={'random-planet jumbotron rounded'}>
            {spinner}
            {content}
        </div>
    )
}
}

export default RandomPlanet


const PLanetView = ({planet}) =>{
    const { id, name, diameter, rotationPeriod, population }= planet
    return <>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className={'planet-img'} alt={'random-planet'}/>
        <div>
            <h2>{name}</h2>
            <ul className={'list-group list-group-flush'}>
                <li className={'item-info'}>
                    <span className={'term'}>Population</span>
                    <span>: {population}</span>
                </li>
                <li className={'item-info'}>
                    <span className={'term'}>Rotation Period</span>
                    <span>: {rotationPeriod}</span>
                </li>
                <li className={'item-info'}>
                    <span className={'term'}>Diameter</span>
                    <span>: {diameter}</span>
                </li>
            </ul>
        </div>
    </>
}