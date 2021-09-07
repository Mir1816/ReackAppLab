import React from 'react'
import Content from '../content/Content'
import "./inner.scss"





export default function Inner() {
    const content = [
        {
            id: 1,
            icon: "./assest/home/vector.png",
            iconText: "#1 Editors Choice App of 2020",
            title: "Best app for your modern lifestyle",
            text:"Increase productivity with a simple to-do app. app for managing your personal budgets.",
            left: "Try For free",
            right: "Watch demo video",
            src: "./assest/home/smart.png"

        },
    ]
    return (
        <div className="inner">
            <Content content={content}/>
        </div>
    )
}
