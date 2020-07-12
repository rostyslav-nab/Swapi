import React from "react"
import './header.scss'
import {Link} from "react-router-dom";

export const Header = () =>{
    return(
        <div className={'header d-flex'}>
            <h1 className={'main-header'}><a href="#">StarDB</a></h1>
            <ul className={'d-flex'}>
                <li><Link to='/'>Films</Link></li>
                <li><Link to='/planet'>Planets</Link></li>
                <li><Link to='/starship'>Starships</Link></li>
            </ul>
        </div>
    )
}

