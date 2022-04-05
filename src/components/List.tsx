import styled from 'styled-components';

type ListProps = {
    children: React.ReactNode;
    className?: string;
}

const UnstyledList = ({ className, children }: ListProps) => {
    return (
        <ul className={className}>{children}</ul>
    )
}

export const List = styled(UnstyledList)`
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
`