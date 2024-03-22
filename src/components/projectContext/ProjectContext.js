import React from 'react';
import "./projectContext.css"

export default function ProjectContext({ project }) {
    return (
        <div className="component_wrapper">
            <section className="center-text">
                <h6>{project.projectTitle}</h6>
                <h4>Project Context</h4>
                <p>{project.projectText} </p>
                <br></br>
                <br></br>
                <br></br>
                <h4>My Role</h4>
                <p>{project.contributionText} </p>
            </section>
        </div>
    )
}



