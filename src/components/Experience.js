// src/components/Experience.js
import React from 'react';
import resumeData from '../data/resumeData';

const Experience = () => {
    return (
        <section>
            <h2>Experience</h2>
            {resumeData.experience.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.company}</h3>
                    <p>{exp.location}</p>
                    <p>{exp.role} - {exp.duration}</p>
                    <ul>
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
