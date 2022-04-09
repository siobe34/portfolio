import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    onButtonClick?: React.MouseEventHandler;
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: string;
    width?: string | number;
    height?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    padding?: string;
    margin?: string;
    color?: string;
    backgroundColor?: string;
    outline?: string;
    border?: string;
    borderRadius?: string;
    cursor?: string;
    fontFamily?: string;
    fontSize?: string;
    whiteSpace?: string;
    hoverColor?: string;
    hoverOpacity?: string;
}

const UnstyledButton = ({ className, children, onButtonClick, buttonType }: PropTypes) => {
    return (
        <button
            type={`${buttonType ?? 'button'}`}
            className={className}
            onClick={onButtonClick}
        >
            { children }
        </button>
    )
}

export const Button = styled(UnstyledButton)`
    display: ${props => props.display ?? 'inline-flex'};
    justify-content: ${props => props.justifyContent ?? 'center'};
    align-items: ${props => props.alignItems ?? 'center'};
    flex-wrap: ${props => props.flexWrap ?? 'wrap'};
    width: ${props => props.width ?? 'auto'};
    height: ${props => props.height ?? 'auto'};
    max-width: ${props => props.maxWidth ?? 'revert'};
    max-height: ${props => props.maxHeight ?? 'revert'};
    padding: ${props => props.padding ?? '.375rem .75rem'};
    margin: ${props => props.margin ?? '0'};
    color: ${props => props.color ?? 'var(--bg-primary-txt)'};
    background-color: ${props => props.backgroundColor ?? 'var(--bg-primary)'};
    outline: ${props => props.outline ?? 'none'};
    border: ${props => props.border ?? 'none'};
    border-radius: ${props => props.borderRadius ?? '.25rem'};
    cursor: ${props => props.cursor ?? 'pointer'};
    font-family: ${props => props.fontFamily ?? 'inherit'};
    font-size: ${props => props.fontSize ?? '1rem'};
    white-space: ${props => props.whiteSpace ?? 'nowrap'};
    
    &:hover {
        color: ${props => props.hoverColor ?? 'var(--bg-primary-txt)'};
        opacity: ${props => props.hoverOpacity ?? '0.75'};
    }
    
    &:active {
        color: var(--secondary);
    }
`