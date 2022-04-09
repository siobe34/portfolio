import { useContext } from 'react';
import ThemeContext from './ThemeContext';

import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    image?: string;
    imageSize?: {x:string, y:string};
    imageStyle?: React.CSSProperties;
    darkMode?: boolean;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    overflow?: string;
    boxShadow?: string;
    border?: string;
    borderRadius?: string;
    commonStyles?: Array<string>;
}

const UnstyledCard = ({ className, children, image, imageSize, imageStyle, darkMode }: PropTypes) => {
    const theme = useContext(ThemeContext);
    
    return (
        <div className={className}>
            {
                image && imageSize ?
                    <img
                        src={image}
                        width={imageSize.x}
                        height={imageSize.y}
                        style={imageStyle}
                        alt="card-description"
                        className={darkMode && theme === 'dark' ? 'logo-dark-mode' : ''}
                    />
                : null
            }
            {children}
        </div>
    )
}

export const Card = styled(UnstyledCard)`
    display: flex;
    flex-direction: ${props => props.flexDirection ?? 'row'};
    justify-content: ${props => props.justifyContent ?? 'center'};
    align-items: ${props => props.alignItems ?? 'center'};
    gap: ${props => props.gap ?? '0'};
    margin: ${props => props.margin ?? '0 0 0 0'};
    padding: ${props => props.padding ?? '2rem'};
    width: ${props => props.width ?? 'auto'};
    height: ${props => props.height ?? 'auto'};
    overflow: ${props => props.overflow ?? 'hidden'};
    box-shadow: ${props => props.boxShadow ?? '.5rem .5rem 0 var(--secondary)'};
    border: ${props => props.border ?? '.2rem solid var(--primary)'};
    border-radius: ${props => props.borderRadius ?? '.8rem'};
    
    & > .logo-dark-mode {
        filter: invert(1);
    }
`