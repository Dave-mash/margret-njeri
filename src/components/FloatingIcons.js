import * as React from "react"
import { Link } from "gatsby";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import '../styles/components/floatingIcons.css'

const FloatingIcons = () => (
    <div className="floatingIcons">
        <div className="iconsContainer">
            <Link to="/"><AiFillGithub className="socials" /></Link>
            <Link to="/"><AiFillLinkedin className="socials" /></Link>
            <Link to="/"><AiFillTwitterCircle className="socials"/></Link>
        </div>
        <div className="floatingLine"></div>
    </div>
);

export default FloatingIcons;