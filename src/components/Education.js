// src/components/Education.js
import React from 'react';
import resumeData from '../data/resumeData';

const Education = () => {
    return (
        <section>
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.institution}</h3>
                    <p>{edu.location}</p>
                    <p>{edu.degree} - {edu.year}</p>
                    {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                    {edu.percentage && <p>Percentage: {edu.percentage}</p>}
                </div>
            ))}
        </section>
    );
};

export default Education;
