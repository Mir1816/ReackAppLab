import React from 'react'
import Logos from './logoInner/Logos'
import "./features.scss"
import Contents from './content/Contents'
import Smart from './smart/Smart'
import SmartIcon from './smartIcon/SmartIcon'
import Designed from './designed/Designed'

export default function Features() {
    return (
        <div className="features">
            <p className="title">Trusted by companies like</p>
            <Logos/>
            <Contents/>
            <Smart/>
            <SmartIcon/>
            <Designed/>
        </div>
    )
}
