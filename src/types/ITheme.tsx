import { themes } from "../components/Theme/Themes";

export interface ITheme {
    theme: keyof typeof themes;
    setTheme?: React.Dispatch<React.SetStateAction<keyof typeof themes>> | null;
}
