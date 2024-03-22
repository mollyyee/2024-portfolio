import React from 'react';
import "./projectConclusion.css"

export default function ProjectConclusion({ project }) {
    return (
        <div className="component_wrapper">
            <section>
                <h6>{project.conclusionTitle}</h6>
                <h4>Outcomes</h4>
                <p>{project.conclusionOutcomes1} </p>
                <br></br>
                <br></br>
                <h4>Learnings</h4>
                <p>{project.conclusionLearnings1} </p>
                <br></br>
                <br></br>
                <p>{project.conclusionLearnings2} </p>
            </section>
        </div>
    )
}



