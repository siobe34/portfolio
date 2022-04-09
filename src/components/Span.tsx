import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    flexWrap?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    overflow?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    backgroundColor?: string;
}

const UnstyledSpan = ({ className, children }: PropTypes) => {
    return (
        <span className={className}>
            {children}
        </span>
    )
}

export const Span = styled(UnstyledSpan)`
    display: flex;
    flex-wrap: ${props => props.flexWrap ?? 'nowrap'};
    flex-direction: ${props => props.flexDirection ?? 'row'};
    justify-content: ${props => props.justifyContent ?? 'flex-start'};
    align-items: ${props => props.alignItems ?? 'center'};
    gap: ${props => props.gap ?? '0'};
    margin: ${props => props.margin ?? '0'};
    padding: ${props => props.padding ?? '0'};
    width: ${props => props.width ?? 'auto'};
    height: ${props => props.height ?? 'auto'};
    overflow: ${props => props.overflow ?? 'hidden'};
    border: ${props => props.border ?? 'none'};
    border-radius: ${props => props.borderRadius ?? 'unset'};
    color: ${props => props.color ?? 'inherit'};
    background-color: ${props => props.backgroundColor ?? 'inherit'};
`