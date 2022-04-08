import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    listStyle?: 'disc' | 'circle' | 'square';
}

const UnstyledList = ({ className, children }: PropTypes) => {
    return (
        <ul className={className}>{children}</ul>
    )
}

export const List = styled(UnstyledList)`
    list-style-type: ${props => props.listStyle ? props.listStyle : 'none'};
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: ${props => props.listStyle ? '2rem' : '0'};
    
    & > li::marker {
        color: var(--secondary);
    }
`