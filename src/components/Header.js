import * as React from "react"
import { Link } from "gatsby"
import { createRef, Component } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import '../styles/components/header.css'
import logo from '../images/logo.png'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.navbar = createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);

        this.state = {
            scrolled: false,
            showMobileMenu: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', null, false);
    }

    handleScroll() {
        const offset = window.scrollY;
        const navbar = !!this.navbar?.current ? this.navbar?.current : null;

        if (offset > 65) {
            this.setState(() => ({ scrolled: true }));

            if (!!navbar && !!navbar.style) {
                const md = window.screen.availWidth > 1280;

                navbar.style.position = 'fixed';
                navbar.style.width = '100%';
                navbar.style.top = '0';
                navbar.style.left = '0';
                //if (md) this.navbar.current.parentElement.nextSibling.style.marginTop = '110px';
            }
        } else {
            this.setState(() => ({ scrolled: false }));

            if (!!navbar && !!navbar.style) {
                navbar.style.top = '40px';
                navbar.style.position = 'static';
                //this.navbar.current.parentElement.nextSibling.style.marginTop = '10px';
            }
        };
    }

    toggleMobileMenu() {
        this.setState((prevState) => ({
            showMobileMenu: prevState.showMobileMenu === true ? false : true
        }));
    }

    hideMobileMenu() {
        this.setState(() => ({ showMobileMenu: false }));
    }

    render() {
        if (typeof window !== 'undefined') {
            var scrollPs = window.scrollY;
            var vh = window.innerHeight;
            var home = scrollPs <= vh;
            var about = (scrollPs >= vh) && (scrollPs <= vh * 2);
            var experience = (scrollPs >= vh * 2) && (scrollPs <= vh * 3);
            var testimonials = (scrollPs >= vh * 3) && (scrollPs <= vh * 3.85);
            var contact = (scrollPs >= vh * 3.85);
        }

        console.log('about: ', home, scrollPs)

        return (
            <header className="header">
                <nav className="navbar">
                    <div className="navbarContainer">
                        <div className="logoWrapper">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Author's Logo"
                                    className="logoImg"
                                />
                            </Link>
                        </div>
                        <GiHamburgerMenu className="menu" onClick={this.toggleMobileMenu} />
                        {this.state.showMobileMenu && <div
                            className="mobileMenu mb"
                            onClick={this.hideMobileMenu}
                        >
                            <ul className="menuList">
                                <Link to="/">
                                    <li className={`mbNavLink ${home ? "mbActive" : ""}`}>Home</li>
                                </Link>
                                <Link to="#about">
                                    <li className={`mbNavLink ${about ? "mbActive" : ""}`}>About</li>
                                </Link>
                                <Link to="/#experience">
                                    <li className={`mbNavLink ${experience ? "mbActive" : ""}`}>Experience</li>
                                </Link>
                                <Link to="/#testimonials">
                                    <li className={`mbNavLink ${testimonials ? "mbActive" : ""}`}>Testimonials</li>
                                </Link>
                                <Link to="/#contact">
                                    <li className={`mbNavLink ${contact ? "mbActive" : ""}`}>Contact</li>
                                </Link>
                            </ul>
                            <div className="socialsIcons mb">
                                <Link to="/"><AiFillGithub className="socials" /></Link>
                                <Link to="/"><AiFillLinkedin className="socials" /></Link>
                                <Link to="/"><AiFillTwitterCircle className="socials"/></Link>
                            </div>
                        </div>}
                        <ul className="links dsk">
                            <Link to="/">
                                <li className={`navLink ${home ? "active" : ""}`}><span>Home</span></li>
                            </Link>
                            <Link to="/#about">
                                <li className={`navLink ${about ? "active" : ""}`}><span>About</span></li>
                            </Link>
                            <Link to="/#experience">
                                <li className={`navLink ${experience ? "active" : ""}`}><span>Experience</span></li>
                            </Link>
                            <Link to="/#testimonials">
                                <li className={`navLink ${testimonials ? "active" : ""}`}><span>Testimonials</span></li>
                            </Link>
                            <Link to="/#contact">
                                <li className={`navLink ${contact ? "active" : ""}`}><span>Contact</span></li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}