import React from 'react'
import "./logo.scss"
export default function Logo({logos}) {
    return (
        <div className="inner">
            {logos.map(item=>{
                return(
                    <div className="item" key={item.item}>
                        <img src={item} alt={item}/>
                    </div>
                   
                )
            })}
        </div>
    )
}
