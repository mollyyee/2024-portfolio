import React from 'react'
import "./fullImg.css"


export default function FullImg({ img }) {
    return (
        <div className="fullImg">
            <img className="img" src={img} alt={img} />
        </div>
    )
}
