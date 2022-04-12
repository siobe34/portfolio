import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    listStyle?: React.CSSProperties;
    listItemStyle?: React.CSSProperties;
    bulletColour?: string;
};

const UnstyledList = ({ className, children }: PropTypes) => {
    return <ul className={className}>{children}</ul>;
};

export const List = styled(UnstyledList)`
    list-style-type: ${(props) => props.listStyle?.listStyleType ?? 'none'};
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: ${(props) => (props.listStyle?.paddingInlineStart ? '2rem' : '0')};
    margin: ${(props) => props.listStyle?.margin ?? '0'};
    line-height: ${(props) => props.listStyle?.lineHeight ?? 'revert'};

    & > li {
        font-size: ${(props) => props.listItemStyle?.fontSize ?? 'inherit'};
        margin: ${(props) => props.listItemStyle?.margin ?? '0'};
    }

    & > li::marker {
        color: ${(props) => props.bulletColour ?? 'var(--primary)'};
    }
`;
