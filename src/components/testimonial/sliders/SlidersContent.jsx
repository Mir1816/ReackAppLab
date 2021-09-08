import React from 'react'
import LeftImgContent from './leftImg/LeftImgContent'
import Slider from './Slider/Slider'
import "./sliderContent.scss"


export default function SlidersContent() {

    const item = [
        {
            id: 1,
            title: "User friendly & Customizable",
            text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
            src: "./assest/testimonial/men.jpg",
            name:"Zoltan Nemeth",
            info: "CEO of Pixler Lab", 
        }
    ];

    const vector = "./assest/testimonial/vector.jpg"
    return (
        <div className="sliders-content">
            <LeftImgContent vector={vector}/>
            <Slider item={item}/>
        </div>
    )
}
