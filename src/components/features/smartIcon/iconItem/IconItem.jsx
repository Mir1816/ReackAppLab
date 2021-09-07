import React from 'react'
import "./iconItem.scss"
export default function IconItem({itemIcon}) {
    return (
        <div className="icon-item">
            {itemIcon.map(item=>{
                return(
                    <div className="item">
                        <img src={item.srs} alt=""/>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
