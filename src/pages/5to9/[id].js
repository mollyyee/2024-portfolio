import * as React from "react"
import HobbyHeader from "../../components/hobbyHeader/HobbyHeader"
import HeroImg from "../../components/heroImg/HeroImg"
import "../../styles/global.css"
import FullImg from "../../components/fullImg/FullImg"
import NightLayout from "../../components/nightLayout/NightLayout"
import NavbarNight from "../../components/navbarNight/NavbarNight"

import { nightProjectsData } from "../../projects/nightprojectsdata";


export default function ProjectDetails({ params }) {

    const id = parseInt(params.id);
    const projectSelector = nightProjectsData.find(p => p.id === id)
    if (!projectSelector) {
        return (<></>)
    }

    return (
        <NightLayout>
            <section className="hero-wrapper">
                <div className="left-column">
                    <NavbarNight />
                    <HobbyHeader project={projectSelector} />
                </div>
                <div >
                    <HeroImg currentImg={projectSelector?.img} />
                </div>
                <div className="full-width">
                    <FullImg img={projectSelector?.detailImg} />
                    <FullImg img={projectSelector?.detailImg2} />
                </div>
            </section>
        </NightLayout>

    )
}

