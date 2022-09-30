import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IFontIcon {
    className?: string;
    icon: FontAwesomeIconProps["icon"];
    onClick?: React.MouseEventHandler;
    highlight?: boolean;
}
