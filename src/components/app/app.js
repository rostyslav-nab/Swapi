import React from 'react'
import {Header} from "../header/header"
import RandomPlanet from "../random-planet/random-planet"
import ItemList from "../item-list/item-list"
import PersonDetails from "../person-details/person-details"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {PlanetPage} from "../planet-page/planet-page"
import {StarshipPage} from "../srarship-page/starship-page"

export default class App extends React.Component{

    state={
        selectedPerson: 5
    }

    onPersonSelected = (id) =>{
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return(
            <Router>
                <div className={'container'}>
                    <Header/>
                    <RandomPlanet/>
                    <div className={'row mb2'}>
                        <div className={'col-md-6'}>
                            <ItemList onItemSelected={this.onPersonSelected}/>
                        </div>
                        <div className={'col-md-3'}>
                            <PersonDetails personId={this.state.selectedPerson}/>
                            {/*<Route path='/planet' component={PlanetPage}/>*/}
                            {/*<Route path='/starship' component={StarshipPage}/>*/}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}