import React from "react"
import './header.scss'

export const Header = () =>{
    return(
        <div className={'header d-flex'}>
            <h1 className={'main-header'}><a href="https://kyiv.codes/">StarDB</a></h1>
            <ul className={'d-flex'}>
                <li><a href='https://kyiv.codes/' target="_blank" rel="noopener noreferrer">My portfolio site</a></li>
                <li><a href='https://www.linkedin.com/in/b-deppo/' target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href='https://www.facebook.com/rostyslav.nabok.9' target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
        </div>
    )
}

