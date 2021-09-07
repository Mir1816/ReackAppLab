import React from 'react'
import DesignedImg from './designedLeft/DesignedImg'
import DesignedInfo from './designedRight/DesignedInfo'
import  "./designed.scss"

export default function Designed() {
    const title = "Designed & built by the latest code integration"
    const text = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
    return (
        <div className="designed">
            <DesignedImg src="./assest/features/layer.png"/>
            <DesignedInfo title={title} text={text}/>
        </div>
    )
}
