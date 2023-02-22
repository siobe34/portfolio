import styled from "styled-components";

import { IMain } from "../types/IMain";

const StyledMain = styled.div`
    display: grid;
    min-height: 100vh;
    min-height: 100dvh;
    grid-template-areas:
        "navbar"
        "content"
        "footer";
    grid-template-rows: auto 1fr auto;
    margin: 0;
    padding: 0;
    font-family: "Source Code Pro";
    background-color: ${(props) => props.theme.bgEl1};
`;

export const Main = ({ className, children }: IMain) => {
    return <StyledMain className={className}>{children}</StyledMain>;
};
