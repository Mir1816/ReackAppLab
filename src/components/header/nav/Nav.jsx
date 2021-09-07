import React from 'react'
import "./nav.scss"
import Button from '../../button/Button'
import NavList from './navList/NavList'

export default function Nav() {

    const list = ["Home","Key Features","Pricing","Testimonial","FAQ",]
    return (
        <div className="nav">
            <nav className="menu">
                <NavList list={list}/>
            </nav>
            <Button title="Try for free"/>
        </div>
    )
}
