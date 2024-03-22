import React from 'react';

export default function SolutionText3({ project }) {
    return (
        <div>
            <section className="solution-text">
                <h5>{project.solutionTitle3}</h5>
                <p>{project.solutionText3} </p>
            </section>
        </div>
    )
}



