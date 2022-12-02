import { useContext } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { ITheme } from "../../types/ITheme";

import { ThemeContext } from "../Theme/ThemeContext";
import { FontIcon } from "../FontIcon";

export const ThemeToggler = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <motion.button
            whileTap={{ rotateY: "180deg" }}
            className='text-2xl outline-none md:absolute md:top-0 md:right-0 md:mr-8 md:h-full'
            onClick={() => setTheme!((prevState: ITheme["theme"]) => (prevState === "light" ? "dark" : "light"))}
        >
            <FontIcon icon={theme === "light" ? faSun : faMoon} highlight />
        </motion.button>
    );
};
