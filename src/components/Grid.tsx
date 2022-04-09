import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    justifyContent?: string;
    flexWrap?: string;
    gap?: string;
    width?: string;
    childFlex?: string;
}

const UnstyledGrid = ({ className, children}: PropTypes) => {
    return (
        <div className={className}>{children}</div>
    )
}

export const Grid = styled(UnstyledGrid)`
    display: flex;
    justify-content: ${props => props.justifyContent ?? 'center'};
    flex-wrap: ${props => props.flexWrap ?? 'wrap'};
    gap: ${props => props.gap ?? '1rem'};
    width: ${props => props.width ?? '100%'};
    
    & > * {
        flex: ${props => props.childFlex ?? '1 0 max(20vw, 720px/3)'};
    }
`