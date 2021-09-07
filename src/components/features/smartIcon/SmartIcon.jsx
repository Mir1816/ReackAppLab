import React from 'react'
import IconItem from './iconItem/IconItem'
import "./smartIcon.scss"
export default function SmartIcon() {

    const itemIcon = [
        {
            id:1,
            srs: "./assest/features/bill.png",
            title: "Automatic Payouts",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests.",

        },
        {
            id:2,
            srs: "./assest/features/network.png",
            title: "Network Effect",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests.",

        },
        {
            id:3,
            srs: "./assest/features/badge.png",
            title: "Bigger Rewards Method",
            text: "Get your blood tests delivered at home collect a sample from the news your blood tests.",

        },
    ]
    return (
        <div className="smart-icon">
            <IconItem itemIcon={itemIcon}/>
        </div>
    )
}
