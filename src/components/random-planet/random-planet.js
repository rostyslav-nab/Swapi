import React, {useEffect, useState} from "react"
import './random-planet.scss'
import SwapiService from "../../services/swapi"
import {Spiner} from "../spiner/spiner"


export const RandomPlanet = () =>{
    const [planet, setPlanet] = useState({})
    const [loading, setLoading] = useState(true)

    const swapiService = new SwapiService()

    useEffect(()=>{
        updatePlanet()
        const interval = setInterval(updatePlanet, 5000)
        return function cleanUp() {
            clearInterval(interval)
        }
    }, [])

    const onPlanetLoaded=(planet)=>{
        setPlanet(planet)
        setLoading(false)
    }

    const updatePlanet =()=>{
        const id = Math.floor(Math.random()*25) + 2
        swapiService.getPlanets(id)
            .then(onPlanetLoaded)
    }

    const spinner = loading ? <Spiner/> : null
    const content = !loading ? <PLanetView planet={planet}/> : null

    return (
        <div className={'random-planet jumbotron rounded'}>
            {spinner}
            {content}
        </div>
    )

}

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