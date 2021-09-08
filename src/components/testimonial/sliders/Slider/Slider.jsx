import React, {useState} from 'react'
import "./slider.scss"
export default function Slider({item}) {
    
    return (
        <div className="slider">
            <p className="slider-title">Meet Client Satisfaction by using product</p>
            <p className="slider-sub-title">The rise of mobile devices transforms the way we consume. elevant channels such as Facebook.</p>
            <div className="slider-container">
                {item.map(item=>{
                    return(
                        <div className="slider-item" key={item.id}>
                            <ul>
                               <li>&#x2605;</li>
                               <li>&#x2605;</li>
                               <li>&#x2605;</li>
                               <li>&#x2605;</li>
                               <li>&#x2605;</li>
                            </ul>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                            <div className="info">
                                <div className="info-img">
                                    <img src={item.src} alt="src" />
                                </div>
                                <div className="person">
                                    <p className="name">{item.name}</p>
                                    <p className="sub-name">{item.info}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="arrow prev">
                    <p>&#8592;</p>
                </div>
                <div className="arrow next">
                    <p>&#8594;</p>
                </div>
            </div>
        </div>
        
    )
    
}
