import * as React from "react"

import "../../styles/global.css"

import FullImg from "../../components/fullImg/FullImg"
import ProjectContext from "../../components/projectContext/ProjectContext"
import TextNoTitle from "../../components/textNoTitle/TextNoTitle"
import ProjectHeader from "../../components/projectHeader/ProjectHeader"
import HeroImg from "../../components/heroImg/HeroImg"
import Navbar from "../../components/navbar/Navbar"
import ColumnImg from "../../components/columnImg/ColumnImg"
import SolutionText from "../../components/solutionText/SolutionText"
import SolutionText2 from "../../components/solutionText2/SolutionText2"
import SolutionText3 from "../../components/solutionText3/SolutionText3"
import ProjectConclusion from "../../components/projectConclusion/ProjectConclusion"
import DayLayout from "../../components/dayLayout/DayLayout"


import { dayProjectsData } from "../../projects/dayprojectsdata"





export default function ProjectDetails({ params }) {

    const id = params.id;
    const projectSelector = dayProjectsData.find(p => p.id == id)



    return (
        <DayLayout>

            <section >
                <div className="hero-wrapper">
                    <div className="left-column">
                        <Navbar />
                        <ProjectHeader project={projectSelector} />
                    </div>
                    <div>
                        <HeroImg currentImg={projectSelector.img} />
                    </div>
                </div>

                <div className="full-width">
                    <FullImg img={projectSelector.detailImg} />
                    <FullImg img={projectSelector.detailImg2} />
                </div>
                <div className='section-wrapper'>
                    <ProjectContext project={projectSelector} />

                </div>
                <div className="full-width">
                    <div className="exhibit">
                        <h4 className="exhibit-text">Process Example 1</h4>
                        <h5 className="exhibit-text">{projectSelector.exhibitaSub}</h5>
                    </div>
                    <FullImg img={projectSelector.exhibita} />
                    <div className="exhibit">
                        <h4 className="exhibit-text">Process Example 2</h4>
                        <h5 className="exhibit-text">{projectSelector.exhibitbSub}</h5>
                    </div>
                    <FullImg img={projectSelector.exhibitb} />
                    <div className="exhibit">
                        <h4 className="exhibit-text">Process Example 3</h4>
                        <h5 className="exhibit-text">{projectSelector.exhibitcSub}</h5>
                    </div>
                    <FullImg img={projectSelector.exhibitc} />
                </div>

                <div className='section-wrapper'>
                    <div className="column-section-wrapper">
                        <div>
                            <SolutionText project={projectSelector} />
                        </div>
                        <div>
                            <ColumnImg currentImg={projectSelector.solution1} />

                        </div>
                    </div>
                    <div className="column-section-wrapper">
                        <div>
                            <SolutionText2 project={projectSelector} />
                        </div>
                        <div>
                            <ColumnImg currentImg={projectSelector.solution2} />
                        </div>
                    </div>
                    <div className="column-section-wrapper">
                        <div>
                            <SolutionText3 project={projectSelector} />
                        </div>
                        <div >
                            <ColumnImg currentImg={projectSelector.solution3} />

                        </div>
                    </div>
                    <div >
                        <ProjectConclusion project={projectSelector} />
                    </div>
                </div>
            </section>
        </DayLayout>
    )
}

