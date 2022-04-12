import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    pageContentStyle?: React.CSSProperties;
    width?: string;
    height?: string;
    mobileWidth?: string;
    mobileHeight?: string;
};

const UnstyledPageContent = ({ className, children, pageContentStyle }: PropTypes) => {
    return (
        <div className={className} style={pageContentStyle}>
            {children}
        </div>
    );
};

export const PageContent = styled(UnstyledPageContent)`
    width: ${(props) => props.width ?? '65vw'};
    height: ${(props) => props.height ?? 'revert'};

    /* Mobile Styles */
    @media all and (max-width: 720px) {
        width: ${(props) => props.mobileWidth ?? '85vw'};
        height: ${(props) => props.mobileHeight ?? 'revert'};
    }
`;
