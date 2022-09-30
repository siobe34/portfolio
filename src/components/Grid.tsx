import styled from "styled-components";

import { IGrid } from "../types/IGrid";

const UnstyledGrid = ({ className, children }: IGrid) => {
    return <div className={`flex flex-wrap justify-center gap-2 w-full ${className}`}>{children}</div>;
};

export const Grid = styled(UnstyledGrid)`
    & > * {
        flex: 1 0 max(20vw, 720px/3);
    }
`;
