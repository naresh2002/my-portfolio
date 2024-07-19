// src/components/Additional.js
import React from 'react';
import resumeData from '../data/resumeData';

const Additional = () => {
    return (
        <section>
            <h2>Additional</h2>
            <h3>Languages</h3>
            <ul>
                {resumeData.additional.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <h3>Technical Skills</h3>
            <ul>
                {resumeData.additional.technicalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h3>Hobbies</h3>
            <ul>
                {resumeData.additional.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <h3>Soft Skills</h3>
            <ul>
                {resumeData.additional.softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Additional;