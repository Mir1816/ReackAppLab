import React from 'react'
import "./leftImgContent.scss"
export default function LeftImgContent({vector}) {
    return (
        <div className="left-img-content">
            <img src={vector} alt="" />
        </div>
    )
}
