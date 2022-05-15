import * as React from "react"
import { Link } from "gatsby"
import { CgCPlusPlus, CgShapeZigzag } from 'react-icons/cg'
import { FaJava, FaHtml5 } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import { GrAndroid } from 'react-icons/gr'

import '../styles/components/about.css'

const About = () => (
    <section className="aboutContainer" id="about">
        <div className="about">
            <h1 className="aboutSectionTitle">ABOUT ME</h1>
            <div className="aboutContent">
                <p>Experienced Founder with a demostrated history of working in the Computer Software industry. Strong business development professional with an Associate's degree focused in Computer Software Engineering from Kenya Methodist University. Passionate about mentorship in all perspectives. A volunteer, facilitator and educator at Upeo Discovery. <br />Skilled in:</p><br />
                <div className="skills">
                    <CgCPlusPlus />
                    <FaHtml5 />
                    <FaJava />
                    <DiMysql />
                    <GrAndroid />
                </div>
                <Link to="/#contact"><button className="experienceBtn">SEND ME MAIL</button></Link>
            </div>
        </div>
        {/* <span className="border"><CgShapeZigzag /></span> */}
    </section>
);

export default About;