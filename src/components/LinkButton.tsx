import { Link } from "react-router-dom";
import styled from "styled-components";

import { ILinkButton } from "../types/ILinkButton";

const LinkUnstyled = ({ className, children, onClick, href, external }: ILinkButton) => {
    if (external)
        return (
            <a
                href={href}
                className={`${className} inline-flex justify-center items-center m-0 py-2 px-4 border-0 rounded text-base cursor-pointer`}
                onClick={onClick}
            >
                {children}
            </a>
        );
    return (
        <Link
            to={href}
            className={`${className} inline-flex justify-center items-center m-0 py-2 px-4 border-0 rounded text-base cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export const LinkButton = styled(LinkUnstyled)`
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
