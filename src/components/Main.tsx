import styled from "styled-components";

import { IMain } from "../types/IMain";

const StyledMain = styled.main`
    display: grid;
    grid-template-rows: minmax(40px, 10vh) 90vh;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
        "navbar"
        "content";
    margin: 0;
    padding: 0;
    font-family: "Source Code Pro";
    background-color: ${(props) => props.theme.bgEl1};
`;

export const Main = ({ className, children }: IMain) => {
    return <StyledMain className={className}>{children}</StyledMain>;
};
