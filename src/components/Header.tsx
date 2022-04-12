import styled from 'styled-components';

type PropTypes = {
    className?: string;
    children: React.ReactNode;
    headerType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headerStyle?: React.CSSProperties;
};

const UnstyledHeader = ({ className, children, headerType }: PropTypes) => {
    if (headerType === 'h2') return <h2 className={className}>{children}</h2>;
    if (headerType === 'h3') return <h3 className={className}>{children}</h3>;
    if (headerType === 'h4') return <h4 className={className}>{children}</h4>;
    if (headerType === 'h5') return <h5 className={className}>{children}</h5>;
    if (headerType === 'h6') return <h6 className={className}>{children}</h6>;
    return <h1 className={className}>{children}</h1>;
};

export const Header = styled(UnstyledHeader)`
    padding: ${(props) => props.headerStyle?.padding ?? '0'};
    margin: ${(props) => props.headerStyle?.margin ?? '0'};
    font-size: ${(props) => props.headerStyle?.fontSize ?? 'revert'};
    font-weight: ${(props) => props.headerStyle?.fontWeight ?? 'revert'};
    text-align: ${(props) => props.headerStyle?.textAlign ?? 'center'};
    text-decoration: ${(props) => props.headerStyle?.textDecoration ?? 'none'};
    text-underline-offset: ${(props) => props.headerStyle?.textUnderlineOffset ?? '.5rem'};
    text-transform: ${(props) => props.headerStyle?.textTransform ?? 'revert'};
    line-height: ${(props) => props.headerStyle?.lineHeight ?? 'revert'};
`;
