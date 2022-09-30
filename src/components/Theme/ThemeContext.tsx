import { createContext } from "react";

import { ITheme } from "../../types/ITheme";

export const ThemeContext = createContext<ITheme>({ theme: "light", setTheme: null });
