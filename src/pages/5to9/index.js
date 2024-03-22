import * as React from "react"
import HeroTextNight from "../../components/heroTextNight/HeroTextNight"
import HeroImg from "../../components/heroImg/HeroImg"
import NavbarNight from "../../components/navbarNight/NavbarNight"
import "../../styles/global.css"
import NightLayout from "../../components/nightLayout/NightLayout"



import placeholder from "../../images/furnihero.jpeg"


export default function Home() {

    const [currentImg, setCurrentImg] = React.useState(placeholder)

    return (
        <NightLayout>
            <section className="hero-wrapper">
                <div className="left-column">
                    <NavbarNight />
                    <HeroTextNight setCurrentImg={setCurrentImg} />
                </div>
                <div >
                    <HeroImg currentImg={currentImg} />
                </div>
            </section>
        </NightLayout>
    )
}


