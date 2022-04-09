import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledLink } from './StyledLink';
import { Button } from './Button';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Technologies from '../pages/Technologies';
import Resume from '../pages/Resume';
import styled from 'styled-components';
import logo from '../assets/initials.svg';

type PropTypes = {
    className?: string;
}

function UnstyledNavbar({ className }: PropTypes) {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMenuClick = () => {
        if (window.innerWidth >= 720) return;
        setMobileMenu(!mobileMenu);
    }
    
    return (
        <>
        <nav className={`navbar ${className}`}>
            <StyledLink to="/">
                <img src={logo} alt='initials' height='30px' className='logo'/>
            </StyledLink>
            <ul className={`navbar-menu ${mobileMenu ? 'active' : null}`}>
                <li><StyledLink onClick={handleMenuClick} to="/about-me">About Me</StyledLink></li>
                <li><StyledLink onClick={handleMenuClick} to="/projects">Projects</StyledLink></li>
                <li><StyledLink onClick={handleMenuClick} to="/technical-skills">Technical Skills</StyledLink></li>
                <li><StyledLink onClick={handleMenuClick} to="/resume">Resume</StyledLink></li>
            </ul>
            <Button
                className='mobile-menu'
                onButtonClick={handleMenuClick}
                fontSize="1.2rem"
            >
                &#9776;
            </Button>
        </nav>
        <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/about-me" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/technical-skills" element={<Technologies />}/>
            <Route path="/resume" element={<Resume />}/>
        </Routes>
        </>
    );
}

export const Navbar = styled(UnstyledNavbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw 0 2vw;
    position: relative;
    color: var(--bg-primary-txt);
    background-color: var(--bg-primary);
    
    & .navbar-menu {
        position: absolute;
        display: none;
        margin: 0;
        padding: 0;
        top: 100%;
        left: 0%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        background-color: inherit;
        border-top: .2rem solid var(--secondary);
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
        text-transform: uppercase;
    }
    
    & .navbar-menu.active {
        display: flex;
    }
    & .navbar-menu.active li {
        padding: 1rem 0 1rem 2vw;
    }
    
    /* Desktop Styles */
    @media all and (min-width: 720px) {
        .navbar-menu {
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4vw;
            width: auto;
            height: 100%;
            border: none;
            padding-inline-start: 0;
            text-transform: uppercase;
        }
        & .navbar-menu.active li {
            padding: 0;
        }
        .mobile-menu {
            display: none;
        }
    }
    
    & a {
        color: var(--bg-primary-txt);
    }
    
    & > :hover, .logo:hover {
        opacity: .85;
        border: none;
    }
`;