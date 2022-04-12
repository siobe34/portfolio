import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    onButtonClick?: React.MouseEventHandler;
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
    buttonStyle?: React.CSSProperties;
    buttonHoverStyle?: React.CSSProperties;
};

const UnstyledButton = ({ className, children, onButtonClick, buttonType }: PropTypes) => {
    return (
        <button type={`${buttonType ?? 'button'}`} className={className} onClick={onButtonClick}>
            {children}
        </button>
    );
};

export const Button = styled(UnstyledButton)`
    display: ${(props) => props.buttonStyle?.display ?? 'inline-flex'};
    flex-direction: ${(props) => props.buttonStyle?.flexDirection ?? 'row'};
    justify-content: ${(props) => props.buttonStyle?.justifyContent ?? 'center'};
    align-items: ${(props) => props.buttonStyle?.alignItems ?? 'center'};
    flex-wrap: ${(props) => props.buttonStyle?.flexWrap ?? 'wrap'};
    width: ${(props) => props.buttonStyle?.width ?? 'auto'};
    height: ${(props) => props.buttonStyle?.height ?? 'auto'};
    max-width: ${(props) => props.buttonStyle?.maxWidth ?? 'revert'};
    max-height: ${(props) => props.buttonStyle?.maxHeight ?? 'revert'};
    padding: ${(props) => props.buttonStyle?.padding ?? '.375rem .75rem'};
    margin: ${(props) => props.buttonStyle?.margin ?? '0'};
    color: ${(props) => props.buttonStyle?.color ?? 'var(--bg-primary-txt)'};
    background-color: ${(props) => props.buttonStyle?.backgroundColor ?? 'var(--bg-primary)'};
    outline: ${(props) => props.buttonStyle?.outline ?? 'none'};
    border: ${(props) => props.buttonStyle?.border ?? 'none'};
    border-radius: ${(props) => props.buttonStyle?.borderRadius ?? '.25rem'};
    cursor: ${(props) => props.buttonStyle?.cursor ?? 'pointer'};
    font-family: ${(props) => props.buttonStyle?.fontFamily ?? 'inherit'};
    font-size: ${(props) => props.buttonStyle?.fontSize ?? '1rem'};
    white-space: ${(props) => props.buttonStyle?.whiteSpace ?? 'nowrap'};

    &:hover {
        color: ${(props) => props.buttonHoverStyle?.color ?? 'var(--bg-primary-txt)'};
        opacity: ${(props) => props.buttonHoverStyle?.opacity ?? '0.75'};
    }

    &:active {
        color: var(--secondary);
    }
`;
