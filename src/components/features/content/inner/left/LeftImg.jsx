import React from 'react'
import "./leftImg.scss"
export default function LeftImg({src}) {
    return (
        <div className="left">
            {src.map(item =>{return(
                <img src={item} alt="{item}" srcset="" key={item} />
            )})}
        </div>
    )
}
