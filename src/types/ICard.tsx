export interface ICard {
    children: React.ReactNode;
    className?: string;
    cardStyle?: React.CSSProperties;
    image?: string;
    imageSize?: { x: string; y: string };
    imageClassName?: string;
}
