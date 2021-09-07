import React from 'react'
import Button from '../../../button/Button'
import "./designedInfo.scss"

export default function DesignedInfo(props) {
    return (
        <div className="designed-info">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
            <Button title="Learn more"/>
        </div>
    )
}
