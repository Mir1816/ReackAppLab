import React from 'react'
import Title from '../../title/Title'
import Cart from './cart/Cart';
import "./carts.scss"
import ItemBtn from './itenBnt/ItemBtn'
export default function Carts() {
    const title = "Get awesome features, without extra charges";
    const text = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.";


    const list = [" Drag & Drop Builder","1,000's of Templates","Blog Support Tools","eCommerce Store "]
    const cartsBlok = [
        {
            id: 1,
            num: "$0",
            mount: "/mount",
            title: "Business Class",
            subTitle: "For small teams or office",
            btn: "Start free trail",
            link:"Or Start 14 days trail",
        },
        {
            id: 2,
            num: "$99",
            mount: "/mount",
            title: "Pro Master",
            subTitle: "For small teams or office",
            btn: "Subscribe Now",
            link:"Or Start 14 days trail",
        }
    ]
    return (
        <div className="carts">
            <Title title={title} subTitle={text}/>
            <ItemBtn left="Monthly" right="Annually"/>
            <Cart cartsBlok={cartsBlok} list={list}/>
        </div>
    )
}
