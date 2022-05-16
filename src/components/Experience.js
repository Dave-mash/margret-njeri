import * as React from "react"
import { useState } from 'react';
import { CgShapeZigzag } from 'react-icons/cg'

import experience from '../utils/experience.json'
import '../styles/components/experience.css'

const Experience = () => {
    const [active, setActive] = useState('Experience One');

    const handleActiveMenu = (e) => {
        const children = Array.from(e.target.parentElement.children);
        const titleContent = e.target.textContent

        children.map(li => li.className = "menuItem");
        e.target.className = "menuItem activeMenu";
        setActive(titleContent)
    }

    return (
        <section className="experienceContainer" id="experience">
            <h1 className="experienceSectionTitle">EXPERIENCE</h1>
            <div className="experienceSection">
                <div className="experienceMenuContainer">
                    <ul className="experienceMenu">
                        <li className="menuItem activeMenu" onClick={(e) => handleActiveMenu(e)}>Experience One</li>
                        <li className="menuItem" onClick={(e) => handleActiveMenu(e)}>Experience Two</li>
                        <li className="menuItem" onClick={(e) => handleActiveMenu(e)}>Experience Three</li>
                    </ul>
                </div>
                <span className="spacing"></span>
                <div className="experienceContent">
                    <h4 className="experienceTitle">{experience[active].title}</h4>
                    <small className="timeline">{experience[active].timeline}</small>
                    <p className="experienceDescription">{experience[active].description}</p>
                    <ul className="responsibilities">
                        {
                            experience[active].responsibilities.map(item => <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
            {/* <span className="border"><CgShapeZigzag /></span> */}
        </section>
    )
}

export default Experience;