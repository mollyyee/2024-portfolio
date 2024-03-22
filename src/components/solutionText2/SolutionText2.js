import React from 'react';

export default function SolutionText2({ project }) {
    return (
        <div>
            <section className="solution-text">
                <h5>{project.solutionTitle2}</h5>
                <p>{project.solutionText2} </p>
            </section>
        </div>
    )
}



