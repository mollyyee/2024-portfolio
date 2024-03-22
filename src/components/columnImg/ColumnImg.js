import * as React from "react"
import "./columnimg.css"


export default function ColumnImg({ currentImg, currentBlur }) {

    return (
        <div className="column__hero">
            <img className="blur" src={currentBlur} alt={currentBlur} />
            <figure className="home__img">
                <img className="home__img--limiter animate__animated animate__fadeIn" src={currentImg} alt={currentImg} />
            </figure>
        </div>
    )
}
