import styled from 'styled-components';

type HeaderProps = {
    className?: string;
    children: React.ReactNode;
    headerType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const UnstyledHeader = ({ className, children, headerType }: HeaderProps) => {
    if (headerType === 'h2') return (<h2 className={className}>{children}</h2>);
    if (headerType === 'h3') return (<h3 className={className}>{children}</h3>);
    if (headerType === 'h4') return (<h4 className={className}>{children}</h4>);
    if (headerType === 'h5') return (<h5 className={className}>{children}</h5>);
    if (headerType === 'h6') return (<h6 className={className}>{children}</h6>);
    return (<h1 className={className}>{children}</h1>);
}

export const Header = styled(UnstyledHeader)`
    padding: 0;
    margin: 0;
`