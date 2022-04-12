import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    spanStyle?: React.CSSProperties;
};

const UnstyledSpan = ({ className, children, spanStyle }: PropTypes) => {
    return (
        <span className={className} style={spanStyle}>
            {children}
        </span>
    );
};

export const Span = styled(UnstyledSpan)`
    display: flex;
    flex-wrap: ${(props) => props.spanStyle?.flexWrap ?? 'nowrap'};
    flex-direction: ${(props) => props.spanStyle?.flexDirection ?? 'row'};
    justify-content: ${(props) => props.spanStyle?.justifyContent ?? 'flex-start'};
    align-items: ${(props) => props.spanStyle?.alignItems ?? 'center'};
    gap: ${(props) => props.spanStyle?.gap ?? '0'};
    margin: ${(props) => props.spanStyle?.margin ?? '0'};
    padding: ${(props) => props.spanStyle?.padding ?? '0'};
    width: ${(props) => props.spanStyle?.width ?? 'auto'};
    height: ${(props) => props.spanStyle?.height ?? 'auto'};
    overflow: ${(props) => props.spanStyle?.overflow ?? 'hidden'};
    border: ${(props) => props.spanStyle?.border ?? 'none'};
    border-radius: ${(props) => props.spanStyle?.borderRadius ?? 'unset'};
    color: ${(props) => props.spanStyle?.color ?? 'inherit'};
    background-color: ${(props) => props.spanStyle?.backgroundColor ?? 'inherit'};
`;
