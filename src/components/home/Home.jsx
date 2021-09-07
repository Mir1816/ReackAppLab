import React from 'react'
import Banner from './banner/Banner'
import "./home.scss"
import Inner from './inner/Inner'
export default function Home() {
    return (
        <div className="home">
            <Banner bg="./assest/home/homeBg.jpg"/>
            <div className="container">
                <Inner/>
            </div>
        </div>
    )
}
