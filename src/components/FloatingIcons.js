import * as React from "react"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import '../styles/components/floatingIcons.css'

const FloatingIcons = () => (
    <div className="floatingIcons">
        <div className="iconsContainer">
            <AiFillGithub className="socials"/>
            <AiFillLinkedin className="socials" />
            <AiFillTwitterCircle className="socials"/>
        </div>
        <div className="floatingLine"></div>
    </div>
);

export default FloatingIcons;