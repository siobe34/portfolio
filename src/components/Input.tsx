import styled from 'styled-components';

type PropTypes = {
    className?: string;
    type?: string;
    onChange?: React.MouseEventHandler;
    placeholder?: string;
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
    outline?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    textAlign?: string;
    activeBorder?: string;
}

const UnstyledInput = ({ className, type, placeholder, onChange }: PropTypes) => {
    return (
        <input
            className={className}
            type={type ?? 'text'}
            placeholder={placeholder ?? ''}
            onChange={() => onChange}
        />
    )
}

export const Input = styled(UnstyledInput)`
    margin: ${props => props.margin ?? '0'};
    padding: ${props => props.padding ?? '.5rem'};
    height: ${props => props.height ?? 'auto'};
    width: ${props => props.width ?? 'auto'};
    outline: ${props => props.outline ?? 'none'};
    border: ${props => props.border ?? '.2rem solid var(--primary)'};
    border-radius: ${props => props.borderRadius ?? '.2rem'};
    color: ${props => props.color ?? 'black'};
    background-color: ${props => props.backgroundColor ?? 'lightgrey'};
    font-size: ${props => props.fontSize ?? '1rem'};
    text-align: ${props => props.textAlign ?? 'left'};
    
    & :active {
        border: ${props => props.activeBorder ?? 'inherit'}
    }
`