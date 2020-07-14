import React, {useState} from 'react'
import {Header} from "../header/header"
import RandomPlanet from "../random-planet/random-planet"
import {ItemList} from "../item-list/item-list"
import PersonDetails from "../person-details/person-details"
import {BrowserRouter as Router, Route} from "react-router-dom"


export const App = () =>{
    const [selectedPerson, setSelectedPerson] = useState(4)

    const onPersonSelected = (id) =>{
        setSelectedPerson(id)
    }

    return (
        <Router>
            <div className={'container'}>
                <Header/>
                <RandomPlanet/>
                <div className={'row mb2'}>
                    <div className={'col-md-6'}>
                        <ItemList onItemSelected={onPersonSelected}/>
                    </div>
                    <div className={'col-md-3'}>
                        <PersonDetails personId={selectedPerson}/>
                        {/*<Route path='/planet' component={PlanetPage}/>*/}
                        {/*<Route path='/starship' component={StarshipPage}/>*/}
                    </div>
                </div>
            </div>
        </Router>
    )
}
