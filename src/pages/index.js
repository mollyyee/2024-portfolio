import * as React from "react"
import HeroText from "../components/heroText/HeroText"
import HeroImg from "../components/heroImg/HeroImg"
import Navbar from "../components/navbar/Navbar"
import "../styles/global.css"
import placeholder from "../images/airtablehome.png"
import blur from "../images/testblur.png"
import 'animate.css';
import DayLayout from "../components/dayLayout/DayLayout"





export default function Home() {

    const [currentImg, setCurrentImg] = React.useState(placeholder)
    const [currentBlur, setCurrentBlur] = React.useState(blur)


    return (
        <DayLayout>
            <section className="hero-wrapper ninetofive">
                <div className="left-column">
                    <Navbar className="nighttext" />
                    <HeroText setCurrentImg={setCurrentImg} setCurrentBlur={setCurrentBlur} />
                </div>
                <div >
                    <HeroImg currentImg={currentImg} currentBlur={currentBlur} />
                </div>
            </section>
        </DayLayout>
    )
}

