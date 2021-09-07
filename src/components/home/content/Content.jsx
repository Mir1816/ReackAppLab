import React from 'react'
import "./content.scss"
export default function Content({content}) {
    return (
        <div className="content">
            {content.map(item=>{
                return(
                    <div className="content-inner" key={item.item}>
                        <div className="item-left">
                            <div className="icon">
                                <div className="icon-inner">
                                    <img src={item.icon} alt="" />
                                </div>
                                <p className="icon-text">{item.iconText}</p>
                            </div>
                            <h1 className="title">{item.title}</h1>
                            <p className="sub-title">{item.text}</p>
                            <a href="#home">{item.left}</a>
                            <a href="#home">{item.right}</a>
                        </div>
                        <div className="item-right">
                            <img src={item.src} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
