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
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    gap: ${props => props.gap ? props.gap : '1rem'};
    width: ${props => props.width ? props.width : '100%'};
    
    & > * {
        flex: ${props => props.childFlex ? props.childFlex : '1 0 20vw'};
    }
`