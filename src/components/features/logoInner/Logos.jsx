import React from 'react'
import Logo from './logo/Logo'
import "./logos.scss"



export default function Logos() {
    const logos =["./assest/logo/company.png","./assest/logo/anubis.png","./assest/logo/alonzo.png", "./assest/logo/express.png","./assest/logo/maniac.png"]
    return (
        <div className="logos">
            <Logo logos={logos}/>
        </div>
    )
}
