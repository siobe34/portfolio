import { Routes, Route, Link } from 'react-router-dom';
import Content from './Content';
import './Navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <Link to="#">HOME</Link>
            <ul className="navbar-menu">
                <li><Link to="#">About Me</Link></li>
                <li><Link to="#">Projects</Link></li>
                <li><Link to="#">Technologies</Link></li>
                <li><Link to="#">Formal Resume</Link></li>
                <li><Link to="#">Get in Touch</Link></li>
            </ul>
            <button
                onClick={() => console.log('mobile menu')}
            >
                MENU
            </button>
        </nav>
        <Routes>
            <Route
                path="/"
                element={<Content />}
            />
        </Routes>
        </>
    );
}

export default Navbar;