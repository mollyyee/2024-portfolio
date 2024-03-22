import React from 'react';
import "./textwithtitle.css"

export default function TextWithTitle({ project }) {
    return (
        <div className="component_wrapper">
            <section className="about_text">
                <h4>{project.projectSub}</h4>
                <h5>{project.projectTitle}</h5>
                <p>{project.projectText} </p>
            </section>
        </div>
    )
}



