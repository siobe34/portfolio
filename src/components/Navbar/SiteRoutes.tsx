import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Technologies from "../../pages/Technologies";
import Resume from "../../pages/Resume";
import PageNotFound from "../../pages/PageNotFound";

export const NAV_ROUTES = ["/about-me", "/projects", "/technical-skills", "/resume"];

export const SITE_ROUTES = [
    { path: "/", element: <Home />, routeTitle: "Home" },
    { path: "/about-me", element: <About />, routeTitle: "About Me" },
    { path: "/projects", element: <Projects />, routeTitle: "Projects" },
    { path: "/technical-skills", element: <Technologies />, routeTitle: "Technical Skills" },
    { path: "/resume", element: <Resume />, routeTitle: "Resume" },
    { path: "/*", element: <PageNotFound />, routeTitle: "Page Not Found" },
];
