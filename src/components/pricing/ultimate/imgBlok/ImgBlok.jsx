import React from 'react'
import "./imgBlok.scss"
export default function ImgBlok({vector}) {
    return (
        <div className="img-blok">
            <img src={vector} alt="" />
        </div>
    )
}
