import React from 'react';


export default function HobbyHeader({ project }) {
    return (
        <div className="component_wrapper">
            <section className="about_text">
                <h4 className="nighttext">{project.headerLabel}</h4>
                <h3 className="nighttext">{project.headerTitle}</h3>
                <br></br>
                <br></br>
                <h4 className="nighttext">Project Timeline</h4>
                <p className="nighttext">{project.projectTimeline} </p>
                <br></br>
                <br></br>
                <h4 className="nighttext">Description</h4>
                <p className="nighttext">{project.projectDescription} </p>
            </section>
        </div>
    )
}

