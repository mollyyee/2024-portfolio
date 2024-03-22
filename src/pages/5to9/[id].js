import * as React from "react"
import HobbyHeader from "../../components/hobbyHeader/HobbyHeader"
import HeroImg from "../../components/heroImg/HeroImg"
import Navbar from "../../components/navbar/Navbar"
import "../../styles/global.css"
import furni from "../../images/furnihero.jpeg"
import FullImg from "../../components/fullImg/FullImg"
import eve1 from "../../images/eve1.svg"
import { nightProjectsData } from "../../projects/nightprojectsdata";
import NightLayout from "../../components/nightLayout/NightLayout"
import NavbarNight from "../../components/navbarNight/NavbarNight"



export default function ProjectDetails({ params }) {

    const id = params.id;
    const projectSelector = nightProjectsData.find(p => p.id == id)

    return (
        <NightLayout>
            <section className="hero-wrapper">
                <div className="left-column">
                    <NavbarNight />
                    <HobbyHeader project={projectSelector} />
                </div>
                <div >
                    <HeroImg currentImg={projectSelector.img} />
                </div>
                <div className="full-width">
                    <FullImg img={projectSelector.detailImg} />
                    <FullImg img={projectSelector.detailImg2} />
                </div>
            </section>
        </NightLayout>

    )
}

