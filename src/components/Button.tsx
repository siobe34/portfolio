import styled from "styled-components";

import { IButton } from "../types/IButton";

const StyledButton = styled.button`
    color: ${(props) => props.theme.txtonPrim};
    background-color: ${(props) => props.theme.primary};
    &:hover {
        filter: contrast(0.75);
    }
    &:active {
        filter: contrast(1);
    }
    &:focus {
        outline: revert;
    }
`;

export const Button = ({ className, children, onClick }: IButton) => {
    return (
        <StyledButton
            className={`${className} inline-flex justify-center items-center m-0 py-2 px-4 border-0 rounded text-base cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};
