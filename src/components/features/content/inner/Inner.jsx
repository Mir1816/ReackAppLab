import React from 'react'
import "./inner.scss"
import LeftImg from "./left/LeftImg"
import Info from './right/IInfo'
export default function Inner() {
    const src = [
        "./assest/features/smart.png"
    ]
    const info = [
        {
            id: 1,
            src: "./assest/features/speed.png",
            title: "Fast Performance",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests.",

        },
        {
            id: 2,
            src: "./assest/features/prototyping.png",
            title: "Prototyping",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests.",

        },
        {
            id: 3,
            src: "./assest/features/vector.png",
            title: "Vector Editing",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests.",

        }
    ]

    return (
        <div className="inner">
            <LeftImg src={src}/>
            <Info info={info}/>
        </div>
    )
}
