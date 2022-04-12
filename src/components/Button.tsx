import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    onButtonClick?: React.MouseEventHandler;
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
    buttonStyle?: React.CSSProperties;
    buttonHoverStyle?: React.CSSProperties;
    buttonActiveStyle?: React.CSSProperties;
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
    align-self: ${(props) => props.buttonStyle?.alignSelf ?? 'revert'};
    flex-wrap: ${(props) => props.buttonStyle?.flexWrap ?? 'wrap'};
    gap: ${(props) => props.buttonStyle?.gap ?? '0'};
    width: ${(props) => props.buttonStyle?.width ?? 'auto'};
    height: ${(props) => props.buttonStyle?.height ?? 'auto'};
    max-width: ${(props) => props.buttonStyle?.maxWidth ?? 'revert'};
    max-height: ${(props) => props.buttonStyle?.maxHeight ?? 'revert'};
    padding: ${(props) => props.buttonStyle?.padding ?? '.375rem .75rem'};
    margin: ${(props) => props.buttonStyle?.margin ?? '0'};
    color: ${(props) => props.buttonStyle?.color ?? 'var(--bg-primary-txt)'};
    background-color: ${(props) => props.buttonStyle?.backgroundColor ?? 'var(--bg-primary)'};
    opacity: ${(props) => props.buttonStyle?.opacity ?? 'revert'};
    outline: ${(props) => props.buttonStyle?.outline ?? 'none'};
    border: ${(props) => props.buttonStyle?.border ?? 'none'};
    border-radius: ${(props) => props.buttonStyle?.borderRadius ?? '.25rem'};
    cursor: ${(props) => props.buttonStyle?.cursor ?? 'pointer'};
    font-family: ${(props) => props.buttonStyle?.fontFamily ?? 'inherit'};
    font-size: ${(props) => props.buttonStyle?.fontSize ?? '1rem'};
    font-weight: ${(props) => props.buttonStyle?.fontWeight ?? 'revert'};
    white-space: ${(props) => props.buttonStyle?.whiteSpace ?? 'revert'};
    filter: ${(props) => props.buttonStyle?.filter ?? 'revert'};

    &:hover {
        display: ${(props) => props.buttonHoverStyle?.display ?? props.buttonStyle?.display ?? 'inline-flex'};
        flex-direction: ${(props) => props.buttonHoverStyle?.flexDirection ?? props.buttonStyle?.flexDirection ?? 'row'};
        justify-content: ${(props) => props.buttonHoverStyle?.justifyContent ?? props.buttonStyle?.justifyContent ?? 'center'};
        align-items: ${(props) => props.buttonHoverStyle?.alignItems ?? props.buttonStyle?.alignItems ?? 'center'};
        align-self: ${(props) => props.buttonHoverStyle?.alignSelf ?? props.buttonStyle?.alignSelf ?? 'revert'};
        flex-wrap: ${(props) => props.buttonHoverStyle?.flexWrap ?? props.buttonStyle?.flexWrap ?? 'wrap'};
        gap: ${(props) => props.buttonHoverStyle?.gap ?? props.buttonStyle?.gap ?? '0'};
        width: ${(props) => props.buttonHoverStyle?.width ?? props.buttonStyle?.width ?? 'auto'};
        height: ${(props) => props.buttonHoverStyle?.height ?? props.buttonStyle?.height ?? 'auto'};
        max-width: ${(props) => props.buttonHoverStyle?.maxWidth ?? props.buttonStyle?.maxWidth ?? 'revert'};
        max-height: ${(props) => props.buttonHoverStyle?.maxHeight ?? props.buttonStyle?.maxHeight ?? 'revert'};
        padding: ${(props) => props.buttonHoverStyle?.padding ?? props.buttonStyle?.padding ?? '.375rem .75rem'};
        margin: ${(props) => props.buttonHoverStyle?.margin ?? props.buttonStyle?.margin ?? '0'};
        color: ${(props) => props.buttonHoverStyle?.color ?? props.buttonStyle?.color ?? 'var(--bg-primary-txt)'};
        background-color: ${(props) => props.buttonHoverStyle?.backgroundColor ?? props.buttonStyle?.backgroundColor ?? 'var(--bg-primary)'};
        opacity: ${(props) => props.buttonHoverStyle?.opacity ?? props.buttonStyle?.opacity ?? '0.75'};
        outline: ${(props) => props.buttonHoverStyle?.outline ?? props.buttonStyle?.outline ?? 'none'};
        border: ${(props) => props.buttonHoverStyle?.border ?? props.buttonStyle?.border ?? 'none'};
        border-radius: ${(props) => props.buttonHoverStyle?.borderRadius ?? props.buttonStyle?.borderRadius ?? '.25rem'};
        cursor: ${(props) => props.buttonHoverStyle?.cursor ?? props.buttonStyle?.cursor ?? 'pointer'};
        font-family: ${(props) => props.buttonHoverStyle?.fontFamily ?? props.buttonStyle?.fontFamily ?? 'inherit'};
        font-size: ${(props) => props.buttonHoverStyle?.fontSize ?? props.buttonStyle?.fontSize ?? '1rem'};
        font-weight: ${(props) => props.buttonHoverStyle?.fontWeight ?? props.buttonStyle?.fontWeight ?? 'revert'};
        white-space: ${(props) => props.buttonHoverStyle?.whiteSpace ?? props.buttonStyle?.whiteSpace ?? 'revert'};
        filter: ${(props) => props.buttonHoverStyle?.filter ?? props.buttonStyle?.filter ?? 'revert'};
    }

    &:active {
        display: ${(props) => props.buttonActiveStyle?.display ?? props.buttonStyle?.display ?? 'inline-flex'};
        flex-direction: ${(props) => props.buttonActiveStyle?.flexDirection ?? props.buttonStyle?.flexDirection ?? 'row'};
        justify-content: ${(props) => props.buttonActiveStyle?.justifyContent ?? props.buttonStyle?.justifyContent ?? 'center'};
        align-items: ${(props) => props.buttonActiveStyle?.alignItems ?? props.buttonStyle?.alignItems ?? 'center'};
        align-self: ${(props) => props.buttonActiveStyle?.alignSelf ?? props.buttonStyle?.alignSelf ?? 'revert'};
        flex-wrap: ${(props) => props.buttonActiveStyle?.flexWrap ?? props.buttonStyle?.flexWrap ?? 'wrap'};
        gap: ${(props) => props.buttonActiveStyle?.gap ?? props.buttonStyle?.gap ?? '0'};
        width: ${(props) => props.buttonActiveStyle?.width ?? props.buttonStyle?.width ?? 'auto'};
        height: ${(props) => props.buttonActiveStyle?.height ?? props.buttonStyle?.height ?? 'auto'};
        max-width: ${(props) => props.buttonActiveStyle?.maxWidth ?? props.buttonStyle?.maxWidth ?? 'revert'};
        max-height: ${(props) => props.buttonActiveStyle?.maxHeight ?? props.buttonStyle?.maxHeight ?? 'revert'};
        padding: ${(props) => props.buttonActiveStyle?.padding ?? props.buttonStyle?.padding ?? '.375rem .75rem'};
        margin: ${(props) => props.buttonActiveStyle?.margin ?? props.buttonStyle?.margin ?? '0'};
        color: ${(props) => props.buttonActiveStyle?.color ?? props.buttonStyle?.color ?? 'var(--bg-primary-txt)'};
        background-color: ${(props) => props.buttonActiveStyle?.backgroundColor ?? props.buttonStyle?.backgroundColor ?? 'var(--bg-primary)'};
        opacity: ${(props) => props.buttonActiveStyle?.opacity ?? props.buttonStyle?.opacity ?? '0.5'};
        outline: ${(props) => props.buttonActiveStyle?.outline ?? props.buttonStyle?.outline ?? 'none'};
        border: ${(props) => props.buttonActiveStyle?.border ?? props.buttonStyle?.border ?? 'none'};
        border-radius: ${(props) => props.buttonActiveStyle?.borderRadius ?? props.buttonStyle?.borderRadius ?? '.25rem'};
        cursor: ${(props) => props.buttonActiveStyle?.cursor ?? props.buttonStyle?.cursor ?? 'pointer'};
        font-family: ${(props) => props.buttonActiveStyle?.fontFamily ?? props.buttonStyle?.fontFamily ?? 'inherit'};
        font-size: ${(props) => props.buttonActiveStyle?.fontSize ?? props.buttonStyle?.fontSize ?? '1rem'};
        font-weight: ${(props) => props.buttonActiveStyle?.fontWeight ?? props.buttonStyle?.fontWeight ?? 'revert'};
        white-space: ${(props) => props.buttonActiveStyle?.whiteSpace ?? props.buttonStyle?.whiteSpace ?? 'revert'};
        filter: ${(props) => props.buttonActiveStyle?.filter ?? props.buttonStyle?.filter ?? 'revert'};
    }
`;
