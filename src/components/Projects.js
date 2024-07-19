// src/components/Projects.js
import React from 'react';
import resumeData from '../data/resumeData';

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            {resumeData.projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>Technologies: {project.technologies.join(', ')}</p>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;
