import { useContext } from 'react';
import ThemeContext from './ThemeContext';

import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    cardStyle?: React.CSSProperties;
    image?: string;
    imageSize?: { x: string; y: string };
    imageStyle?: React.CSSProperties;
    darkMode?: boolean;
};

const UnstyledCard = ({ className, children, image, imageSize, imageStyle, darkMode }: PropTypes) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={className}>
            {image && imageSize ? (
                <img
                    src={image}
                    width={imageSize.x}
                    height={imageSize.y}
                    style={imageStyle}
                    alt='card-description'
                    className={darkMode && theme === 'dark' ? 'logo-dark-mode' : ''}
                />
            ) : null}
            {children}
        </div>
    );
};

export const Card = styled(UnstyledCard)`
    display: flex;
    flex-direction: ${(props) => props.cardStyle?.flexDirection ?? 'row'};
    justify-content: ${(props) => props.cardStyle?.justifyContent ?? 'center'};
    align-items: ${(props) => props.cardStyle?.alignItems ?? 'center'};
    gap: ${(props) => props.cardStyle?.gap ?? '0'};
    margin: ${(props) => props.cardStyle?.margin ?? '0 0 0 0'};
    padding: ${(props) => props.cardStyle?.padding ?? '2rem'};
    width: ${(props) => props.cardStyle?.width ?? 'auto'};
    height: ${(props) => props.cardStyle?.height ?? 'auto'};
    overflow: ${(props) => props.cardStyle?.overflow ?? 'hidden'};
    box-shadow: ${(props) => props.cardStyle?.boxShadow ?? '.5rem .5rem 0 var(--secondary)'};
    border: ${(props) => props.cardStyle?.border ?? '.2rem solid var(--primary)'};
    border-radius: ${(props) => props.cardStyle?.borderRadius ?? '.8rem'};

    & > .logo-dark-mode {
        filter: invert(1);
    }
`;
