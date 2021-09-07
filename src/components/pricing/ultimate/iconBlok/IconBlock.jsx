import React from 'react'
import Button from '../../../button/Button'
import "./iconBlock.scss"
export default function IconBlock({ultimateBlok,ultimateBlok2}) {
    return (
        <div className="icon-blok">
            <h3 className="icon-blok-title">Ultimate features that we built</h3>
            <p className="icon-blok-text">The rise of mobile devices transforms the way we consume information entirely.</p>
            <div className="icon-blok-inner">
                {ultimateBlok.map(item=>{
                    return(
                        <div className="blok-item" key={item.id}>
                            <img src={item.src} alt=""/>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className="icon-blok-inner">
                {ultimateBlok2.map(item=>{
                    return(
                        <div className="blok-item" key={item.id}>
                            <img src={item.src} alt=""/>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
            <Button title="See all"/>
        </div>
    )
}
