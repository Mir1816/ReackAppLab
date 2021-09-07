import React from 'react'
import Title from '../../title/Title'
import "./pricingApp.scss"
import PricingIcon from './pricingIcon/PricingIcon';
export default function PricingApp() {

    let title = "Why you should choose our app";
    let subTitle = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.";


    const iconItem = [
        {
            id: 1,
            src: "./assest/pricing/design.png",
            title: "App Development",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 2,
            src: "./assest/pricing/trophy.png",
            title: "10 Times Award",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 3,
            src: "./assest/pricing/computer.png",
            title: "Cloud Storage",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 4,
            src: "./assest/pricing/support.png",
            title: "Customization",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 5,
            src: "./assest/pricing/ui.png",
            title: "UX Planning",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
        {
            id: 6,
            src: "./assest/pricing/service.png",
            title: "Customer Support",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests."
        },
    ]
    return (
        <div className="pricing-apps">
            <Title title={title} subTitle={subTitle}/>
            <PricingIcon iconItem={iconItem}/>
        </div>
    )
}
