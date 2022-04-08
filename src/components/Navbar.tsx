import { Routes, Route } from 'react-router-dom';
import { StyledLink } from './StyledLink';
import { Button } from './Button';
import Projects from '../pages/Projects';
import Technologies from '../pages/Technologies';
import styled from 'styled-components';

type PropTypes = {
    className?: string;
}

function UnstyledNavbar({ className }: PropTypes) {
    return (
        <>
        <nav className={`navbar ${className}`}>
            <StyledLink to="/">HOME</StyledLink>
            <ul className="navbar-menu">
                <li><StyledLink to="#">About Me</StyledLink></li>
                <li><StyledLink to="/projects">Projects</StyledLink></li>
                <li><StyledLink to="/technical-skills">Technical Skills/Technologies</StyledLink></li>
                <li><StyledLink to="#">Formal Resume</StyledLink></li>
                <li><StyledLink to="#">Get in Touch</StyledLink></li>
            </ul>
            <Button
                onButtonClick={() => console.log('mobile menu')}
            >
                MENU
            </Button>
        </nav>
        <Routes>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/technical-skills" element={<Technologies />}/>
        </Routes>
        </>
    );
}

export const Navbar = styled(UnstyledNavbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--bg-primary-txt);
    background-color: var(--bg-primary);
    
    & > .navbar-menu {
        display: flex;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
        gap: 2rem;
    }
    
    & > a {
        color: var(--bg-primary-txt);
    }
`;