import { useState, useEffect } from 'react';
import ThemeContext from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

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
    return (
        <main>
            <ThemeContext.Provider value={theme}>
                <Navbar />
                <Footer setTheme={setTheme} />
            </ThemeContext.Provider>
        </main>
    );
}

export default App;
