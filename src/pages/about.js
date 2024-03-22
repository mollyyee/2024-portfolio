import * as React from "react"
import AboutMe from "../components/aboutMe/AboutMe"
import HeroImg from "../components/heroImg/HeroImg"
import Navbar from "../components/navbar/Navbar"
import "../styles/global.css"
import me from "../images/me.jpg"


export default function About() {

  const [currentImg, setCurrentImg] = React.useState(me)

  return (
    <section className="hero-wrapper">
      <div className="left-column">
        <Navbar />
        <AboutMe />
      </div>
      <div >
        <HeroImg currentImg={currentImg} />
      </div>
    </section>
  )
}
