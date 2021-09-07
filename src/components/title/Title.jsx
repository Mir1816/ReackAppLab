import React from 'react'
import "./title.scss"

export default function Title(props) {
    return (
        <div className="global-title">
            <h4>{props.title}</h4>
            <p>{props.subTitle}</p>
        </div>
    )
}
