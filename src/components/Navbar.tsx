import { Routes, Route } from 'react-router-dom';
import { StyledLink } from './StyledLink';
import Technologies from '../pages/Technologies';
import './Navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <StyledLink to="/">HOME</StyledLink>
            <ul className="navbar-menu">
                <li><StyledLink to="#">About Me</StyledLink></li>
                <li><StyledLink to="#">Projects</StyledLink></li>
                <li><StyledLink to="/technical-skills">Technical Skills/Technologies</StyledLink></li>
                <li><StyledLink to="#">Formal Resume</StyledLink></li>
                <li><StyledLink to="#">Get in Touch</StyledLink></li>
            </ul>
            <button
                onClick={() => console.log('mobile menu')}
            >
                MENU
            </button>
        </nav>
        <Routes>
            <Route path="/technical-skills" element={<Technologies />}/>
        </Routes>
        </>
    );
}

export default Navbar;