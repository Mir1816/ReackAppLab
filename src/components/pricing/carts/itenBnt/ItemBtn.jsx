import React from 'react'
import "./itemBtn.scss"
export default function ItemBtn(props) {
    return (
        <div className="inner-btn">
            <button type="submit">{props.left}</button>
            <button type="submit">{props.right}</button>
        </div>
    )
}
