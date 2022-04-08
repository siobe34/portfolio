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
    overflow?: string;
    border?: string;
    borderRadius?: string;
}

const UnstyledContainer = ({ className, children }: PropTypes) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export const Container = styled(UnstyledContainer)`
    display: flex;
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    gap: ${props => props.gap ? props.gap : '0'};
    margin: ${props => props.margin ? props.margin : '0'};
    padding: ${props => props.padding ? props.padding : '0'};
    overflow: ${props => props.overflow ? props.overflow : 'hidden'};
    border: ${props => props.border ? props.border : 'none'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 'unset'};
`