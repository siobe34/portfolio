export interface ILinkButton {
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    href: string;
    external?: boolean;
}
