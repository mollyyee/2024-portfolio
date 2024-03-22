import * as React from "react"
import "./heroImg.css"


export default function HeroImg({ currentImg, currentBlur }) {

    return (
        <div className="home__hero">
            <img className="blur" src={currentBlur} alt={currentBlur} />
            <figure className="home__img">
                <img className="home__img--limiter animate__animated animate__fadeIn" src={currentImg} alt={currentImg} />
            </figure>
        </div>
    )
}
