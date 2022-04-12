import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    containerStyle?: React.CSSProperties;
};

const UnstyledContainer = ({ className, children }: PropTypes) => {
    return <div className={className}>{children}</div>;
};

export const Container = styled(UnstyledContainer)`
    display: flex;
    flex-wrap: ${(props) => props.containerStyle?.flexWrap ?? 'nowrap'};
    flex-direction: ${(props) => props.containerStyle?.flexDirection ?? 'row'};
    justify-content: ${(props) => props.containerStyle?.justifyContent ?? 'flex-start'};
    align-items: ${(props) => props.containerStyle?.alignItems ?? 'center'};
    gap: ${(props) => props.containerStyle?.gap ?? '0'};
    margin: ${(props) => props.containerStyle?.margin ?? '0'};
    padding: ${(props) => props.containerStyle?.padding ?? '0'};
    width: ${(props) => props.containerStyle?.width ?? 'auto'};
    height: ${(props) => props.containerStyle?.height ?? 'auto'};
    overflow: ${(props) => props.containerStyle?.overflow ?? 'hidden'};
    border: ${(props) => props.containerStyle?.border ?? 'none'};
    border-radius: ${(props) => props.containerStyle?.borderRadius ?? 'unset'};
    color: ${(props) => props.containerStyle?.color ?? 'inherit'};
    background-color: ${(props) => props.containerStyle?.backgroundColor ?? 'inherit'};
`;
