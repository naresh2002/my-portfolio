// src/components/Achievements.js
import React
from 'react';
import resumeData from '../data/resumeData';

const Achievements = () => {
    return (
        <section>
            <h2>Achievements</h2>
            <ul>
                {resumeData.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;