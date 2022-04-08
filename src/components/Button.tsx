import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    onButtonClick?: React.MouseEventHandler;
    width?: string | number;
    padding?: string;
    margin?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    cursor?: string;
    fontSize?: string;
    whiteSpace?: string;
    hoverColor?: string;
    hoverOpacity?: string;
}

const UnstyledButton = ({ className, children, onButtonClick }: PropTypes) => {
    return (
        <button
            className={className}
            onClick={onButtonClick}
        >
            { children }
        </button>
    )
}

export const Button = styled(UnstyledButton)`
    width: ${props => props.width ? props.width : 'auto'};
    padding: ${props => props.padding ? props.padding : '.375rem .75rem'};
    margin: ${props => props.margin ? props.margin : '0'};
    color: ${props => props.color ? props.color : 'var(--bg-primary-txt)'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'var(--bg-primary)'};
    border: ${props => props.border ? props.border : 'none'};
    border-radius: ${props => props.borderRadius ? props.border : '.25rem'};
    cursor: ${props => props.cursor ? props.cursor : 'pointer'};
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    white-space: ${props => props.whiteSpace ? props.fontSize : 'nowrap'};
    
    &:hover {
        color: ${props => props.hoverColor ? props.hoverColor : 'var(--bg-primary-txt)'};
        opacity: ${props => props.hoverOpacity ? props.hoverOpacity : '0.75'};
    }
`