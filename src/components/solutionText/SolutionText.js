import React from 'react';

export default function SolutionText({ project }) {
    return (
        <div >
            <section className="solution-text">
                <h5>{project.solutionTitle}</h5>
                <p>{project.solutionText} </p>
            </section>
        </div>
    )
}



