import styled from "styled-components";

import { ISpan } from "../types/ISpan";

const StyledSpan = styled.span`
    padding: 0 0.5rem 0 0.5rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme.txtonSec};
    background-color: ${(props) => props.theme.secondary};
`;

export const Span = ({ className, children }: ISpan) => {
    return <StyledSpan className={className}>{children}</StyledSpan>;
};
