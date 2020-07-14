import React, {useEffect, useState} from "react"
import './item-list.scss'
import SwapiService from "../../services/swapi"
import {Spiner} from "../spiner/spiner"

export const ItemList = (props) =>{
    const [peopleList, setPeopleList] = useState(null)

    useEffect(()=>{
        swapiService.getAllPeople()
            .then((people)=>{
                setPeopleList(people)
            })
    }, []);

    const renderItems = (arr) =>{
        return arr.map(({id, name}) =>{
            return (
                <li className={'list-group-item'} key={id} onClick={()=>props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }


    const swapiService = new SwapiService()

    if(!peopleList){
        return <Spiner/>
    }

    const items = renderItems(peopleList)

    return(
        <div className={'item-list'}>
            <ul className={'item-list list-group list-custom'}>
                {items}
            </ul>
        </div>
    )
}

