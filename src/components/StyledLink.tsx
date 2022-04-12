import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:hover {
        border-bottom: 0.2rem solid var(--bg-primary-txt);
        transition: all 100ms ease-out;
    }
`;
