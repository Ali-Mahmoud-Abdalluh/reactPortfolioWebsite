import React from 'react'
import { BiCheck } from 'react-icons/bi';
import "./services.css"

const ServiceCard = ({ service }) => {
    return (
        <article className='services'>
            <div className="services__head">
                <h3>{Object.keys(service)[0]}</h3>
            </div>
            <ul className='services__list'>
                {
                    Object.values(service)[0].map(
                        (item, index) =>
                            <li className='serivces__list-item' key={index}>
                                <BiCheck className="serivces__list-item-icon" />
                                <p>{item}</p>
                            </li>
                    )
                }
            </ul>
        </article>
    )
}

export default ServiceCard