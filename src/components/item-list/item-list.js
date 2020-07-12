import React from "react"
import './item-list.scss'
import SwapiService from "../../services/swapi";
import {Spiner} from "../spiner/spiner";

export default class ItemList extends React.Component{
    swapiService = new SwapiService()

    state={
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList)=>{
                this.setState({peopleList})
            })
    }

    renderItems(arr){
        return arr.map(({id, name}) =>{
            return (
                <li className={'list-group-item'} key={id} onClick={()=>this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {

        const {peopleList} = this.state

        if(!peopleList){
            return <Spiner/>
        }

        const items = this.renderItems(peopleList)

        return(
            <div className={'item-list'}>
                <ul className={'item-list list-group list-custom'}>
                    {items}
                </ul>
            </div>
        )
    }
}

