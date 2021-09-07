import React from 'react'
import Logo from "../logo/Logo"
import Nav from "../nav/Nav"
import "./inner.scss"
export default function Inner() {
    return (
        <div className="inner">
           <Logo/>
           <Nav/>
        </div>
    )
}
