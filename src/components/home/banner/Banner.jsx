import React from 'react'
import "./banner.scss"
export default function Banner(props) {
    return (
        <div className="banner">
            <img src={props.bg} alt="" />
        </div>
    )
}
