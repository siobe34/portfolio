import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import webFont from "webfontloader";

import { ITheme } from "./types/ITheme";

import { ThemeContext } from "./components/Theme/ThemeContext";
import { themes } from "./components/Theme/Themes";
import { Main } from "./components/Main";
import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar/Navbar";
import { SITE_ROUTES } from "./components/Navbar/SiteRoutes";
import { Footer } from "./components/Footer";

//* Get user preferred theme
const userPreferredTheme = window.matchMedia("(prefers-color-scheme: dark)");

function App() {
    const location = useLocation();
    const [currentTheme, setCurrentTheme] = useState<ITheme["theme"]>(userPreferredTheme.matches ? "dark" : "light");

    //* Using webfontloader to load Google fonts
    useEffect(() => {
        webFont.load({
            google: {
                families: ["Montserrat: 100,200,300,400,500,600,700,800,900"],
            },
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
            <ThemeProvider theme={themes[currentTheme]}>
                <Main>
                    <Navbar />
                    <AnimatePresence mode='wait'>
                        <Routes key={location.pathname} location={location}>
                            {SITE_ROUTES.map((siteRoute) => {
                                return (
                                    <Route
                                        key={siteRoute.path}
                                        path={siteRoute.path}
                                        element={
                                            <Content>
                                                {siteRoute.element}
                                                <Footer />
                                            </Content>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </AnimatePresence>
                </Main>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
