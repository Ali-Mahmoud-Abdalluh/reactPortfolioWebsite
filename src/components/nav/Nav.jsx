import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine, RiMessage3Line } from "react-icons/ri";
import { useState } from 'react';

const Nav = () => {
    const [activated, setActivated] = useState("#");

    return (
        <nav>
            <a href="#" className={activated === "#" ? 'active' : 'false'} onClick={() => setActivated("#")}>
                <AiOutlineHome />
            </a>
            <a href="#about" className={activated === "#about" ? 'active' : 'false'} onClick={() => setActivated("#about")}>
                <AiOutlineUser />
            </a>
            <a href="#experience" className={activated === "#experience" ? 'active' : 'false'} onClick={() => setActivated("#experience")}>
                <BiBook />
            </a>
            <a href="#services" className={activated === "#services" ? 'active' : 'false'} onClick={() => setActivated("#services")}>
                <RiServiceLine />
            </a>
            <a href="#contact" className={activated === "#contact" ? 'active' : 'false'} onClick={() => setActivated("#contact")}>
                <RiMessage3Line />
            </a>
        </nav>
    )
}

export default Nav