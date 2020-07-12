import React from "react"
import './header.scss'

export const Header = () =>{
    return(
        <div className={'header d-flex'}>
            <h1 className={'main-header'}><a href="#">StarDB</a></h1>
            <ul className={'d-flex'}>
                <li><a href="#">Films</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">Starships</a></li>
            </ul>
        </div>
    )
}

