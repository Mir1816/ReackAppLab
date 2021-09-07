import React from 'react'
import IconBlock from './iconBlok/IconBlock'
import ImgBlok from './imgBlok/ImgBlok'
import "./ultimate.scss"
export default function Ultimate() {

    const vector = "./assest/pricing/phone.png"

    const ultimateBlok = [
        {
            id: 1,
            src:"./assest/pricing/design.png",
            title: "App Development",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 2,
            src:"./assest/pricing/ui.png",
            title: "UX Planing",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
    ]

    const ultimateBlok2 = [
        {
            id: 1,
            src:"./assest/pricing/computer.png",
            title: "Cloud Storage",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 2,
            src:"./assest/pricing/service.png",
            title: "Customer support",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
    ]
    return (
        <div className="ultimate">
            <IconBlock ultimateBlok={ultimateBlok} ultimateBlok2={ultimateBlok2}/>
            <ImgBlok vector={vector}/>
        </div>
    )
}
