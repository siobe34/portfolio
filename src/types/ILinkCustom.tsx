import { To } from "react-router-dom";

export interface ILinkCustom {
    className?: string;
    children: React.ReactNode;
    to: To;
    onClick?: React.MouseEventHandler;
    animatedLink?: boolean;
}
