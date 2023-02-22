import { Link } from "react-router-dom";
import styled from "styled-components";

import { ILinkCustom } from "../types/ILinkCustom";

const StyledLink = styled(Link)`
    opacity: 0.9;
    &:hover {
        opacity: 1;
    }
`;

const StyledAnimatedLink = styled(Link)`
    opacity: 0.9;
    &:hover {
        opacity: 1;
    }
    & .link-hover {
        border: 1px solid ${(props) => props.theme.primary};
        width: 1rem;
    }
    &:hover .link-hover {
        width: 100%;
        transition: width 150ms linear;
    }
`;

export const LinkCustom = ({ className, children, to, onClick, animatedLink }: ILinkCustom) => {
    if (!animatedLink)
        return (
            <StyledLink className={`flex justify-center items-center text-inherit ${className}`} to={to} onClick={onClick}>
                {children}
            </StyledLink>
        );

    return (
        <StyledAnimatedLink className={`flex flex-col justify-center items-center text-inherit ${className}`} to={to} onClick={onClick}>
            {children}
            <div className='link-hover' />
        </StyledAnimatedLink>
    );
};
