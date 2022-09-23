import React from 'react'
import "./experience.css"
import { GoVerified } from "react-icons/go"


const ExperienceDetails = ({ detail }) => {
    return (
        <article className="experience__details">
            <GoVerified className='experience__details-icon' />
            <div>
                <h4>{detail.name}</h4>
                <small className='text-ligth'>{detail.experience}</small>
            </div>
        </article>
    )
}

export default ExperienceDetails