import React from 'react'
import Button from '../../../button/Button'

import "./cart.scss"
export default function Cart({cartsBlok,list}) {
    return (
        <div className="cart">
            {cartsBlok.map(item=>{
                return(
                    <div className="cart-item">
                        <div className="cart-top" key={item.id}>
                            <h2>{item.num}<span>{item.mount}</span></h2>
                            <h3>{item.title}</h3>
                            <p>{item.subTitle}</p>
                        </div>
                        <div className="cart-bot">
                            <ul>
                                {list.map(list=>{
                                    return(
                                        <li className="cart-list"key={list}>{list}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        
                        <Button title={item.btn}/>
                        <a href="#home">{item.link}</a>
                    </div>
                   
                )

            })}
        </div>
    )
}
