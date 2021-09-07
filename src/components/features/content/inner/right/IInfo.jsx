import React from 'react'
import "./info.scss"
export default function Info({info}) {
    return (
        <div className="info-awesome">
            <h2 className="info-title">Awesome apps features</h2>
            <p className="info-text">Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
            {info.map(item=>{
                return(
                    <div className="item" key={item.id}>
                        <div className="icon">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="info">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
