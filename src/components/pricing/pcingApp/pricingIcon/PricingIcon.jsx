import React from 'react'
import "./pricingIcon.scss"
export default function PricingIcon({iconItem}) {
    return (
        <div className="pricing-icon-inner">
            {iconItem.map(item=>{
                return(
                    <div className="pricing-icon-item" key={item.id}>
                        <img src={item.src} alt="" />
                        <h6>{item.title}</h6>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
