import React from 'react'
import Carts from './carts/Carts'
import PricingApp from './pcingApp/PricingApp'
import "./pricing.scss"
import Ultimate from './ultimate/Ultimate'
export default function Pricing() {
    return (
        <div className="pricing">
            <PricingApp/>
            <Ultimate/>
            <Carts/>
        </div>
    )
}
