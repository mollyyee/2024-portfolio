import React from 'react';
import "./textnotitle.css"

export default function TextNoTitle({ project }) {
    return (
        <div className="component_wrapper">
            <section>
                <h4>{project.contributionSub}</h4>
                <p>{project.contributionText} </p>
            </section>
        </div>
    )
}



