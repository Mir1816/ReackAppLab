import React from 'react'
import "./navList.scss"
export default function NavList({list}) {
    console.log(list)
    return (
        <ul className="list">
            {list.map((item)=>{
                return(
                    <li className="item" key={item}><a href={item}>{item}</a></li>
                )
            })}
        </ul>
    )
}
