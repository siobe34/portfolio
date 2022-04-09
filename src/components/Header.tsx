import styled from 'styled-components';

type PropTypes = {
    className?: string;
    children: React.ReactNode;
    headerType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    margin?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    textDecoration?: string;
    textUnderlineOffset?: string;
    textTransform?: string;
    lineHeight?: string;
}

const UnstyledHeader = ({ className, children, headerType }: PropTypes) => {
    if (headerType === 'h2') return (<h2 className={className}>{children}</h2>);
    if (headerType === 'h3') return (<h3 className={className}>{children}</h3>);
    if (headerType === 'h4') return (<h4 className={className}>{children}</h4>);
    if (headerType === 'h5') return (<h5 className={className}>{children}</h5>);
    if (headerType === 'h6') return (<h6 className={className}>{children}</h6>);
    return (<h1 className={className}>{children}</h1>);
}

export const Header = styled(UnstyledHeader)`
    padding: ${props => props.padding ?? '0'};
    margin: ${props => props.margin ?? '0'};
    font-size: ${props => props.fontSize ?? 'revert'};
    font-weight: ${props => props.fontWeight ?? 'revert'};
    text-align: ${props => props.textAlign ?? 'center'};
    text-decoration: ${props => props.textDecoration ?? 'none'};
    text-underline-offset: ${props => props.textUnderlineOffset ?? '.5rem'};
    text-transform: ${props => props.textTransform ?? 'revert'};
    line-height: ${props => props.lineHeight ?? 'revert'};
`