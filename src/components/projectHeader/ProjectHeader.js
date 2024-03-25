import React from 'react';


export default function ProjectHeader({ project }) {
    return (
        <div className="component_wrapper">
            <section className="about_text">
                <h4>{project?.headerLabel}</h4>
                <h3>{project?.headerTitle}</h3>
                <br></br>
                <br></br>
                <h4>Team</h4>
                <p>{project?.team} </p>
                <br></br>
                <br></br>
                <h4>Project Timeline</h4>
                <p>{project?.projectTimeline} </p>
            </section>
        </div>
    )
}

