import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import ThemeContext from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Resume from './pages/Resume';

function App() {
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = window.localStorage.getItem('theme');
        if (!storedTheme) return 'light';
        return storedTheme;
    });

    useEffect(() => {
        const root = document.getElementById('root');
        if (!root) return undefined;
        root.className = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const location = useLocation();
    return (
        <main>
            <ThemeContext.Provider value={theme}>
                <Navbar />
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about-me' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/technical-skills' element={<Technologies />} />
                        <Route path='/resume' element={<Resume />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </AnimatePresence>
                <Footer setTheme={setTheme} />
            </ThemeContext.Provider>
        </main>
    );
}

export default App;
