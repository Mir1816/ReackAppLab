import React from 'react'
import "./button.scss"
export default function Button(props) {
    return (
        <div>
            <button  className="button" type="submit">{props.title}</button>
        </div>
    )
}
