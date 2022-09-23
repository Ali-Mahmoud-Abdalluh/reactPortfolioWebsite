import React from 'react'
import './experience.css'
import ExperienceDetails from './ExperienceDetails';

const Experience = () => {
    const frontend_details = [
        { name: "HTML", experience: "Experienced" },
        { name: "CSS", experience: "Intermediate" },
        { name: "JavaScript", experience: "Experienced" },
        { name: "Tailwind", experience: "Experienced" },
        { name: "React", experience: "Experienced" },
    ];
    const backend_details = [
        { name: "Node JS", experience: "Basic" },
        { name: "MongoDB", experience: "Experienced" },
        { name: "PHP", experience: "Experienced" },
        { name: "Laravel", experience: "Experienced" },
        { name: "MySQL", experience: "Experienced" },
        { name: "Python", experience: "Experienced" },
        { name: "Django", experience: "Experienced" },
    ]
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontend_details.map((detail, index) => <ExperienceDetails key={index} detail={detail} />)}
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        {backend_details.map((detail, index) => <ExperienceDetails key={index} detail={detail} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience