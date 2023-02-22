import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { INavbar } from "../../types/INavbar";

import { FontIcon } from "../FontIcon";
import { LinkCustom } from "../LinkCustom";
import { NavLinks } from "./NavLinks";
import { ThemeToggler } from "../Theme/ThemeToggler";
import { Logo } from "../Logo";

const StyledNavbar = styled.nav`
    color: ${(props) => props.theme.txtonBg};
    background-color: ${(props) => props.theme.bgEl3};
    border-bottom: 1px solid ${(props) => props.theme.primary};
    & .nav-links {
        background-color: ${(props) => props.theme.bgEl2};
        border-bottom: 3px solid ${(props) => props.theme.primary};
    }
    & .nav-links a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    & .nav-links > * {
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
        width: 100%;
        text-align: center;
    }
    & .active {
        display: flex;
    }
    & .mobile-menu:hover {
        color: ${(props) => props.theme.primary};
    }
    // Desktop Styling
    @media all and (min-width: 768px) {
        & .nav-links {
            background-color: transparent;
            border-bottom: none;
        }
        & .nav-links > * {
            width: auto;
        }
    }
`;

export const Navbar = ({ className }: INavbar) => {
    //* Use react router's useLocation hook to determine whenever the page is changed
    const location = useLocation();

    //* Initialize state of mobile menu
    const [menuActive, setMenuActive] = useState<boolean>(false);

    //* Every time the page is changed, set the mobile menu to hidden and scroll to the top of the page
    useEffect(() => {
        setMenuActive(false);
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <StyledNavbar className={`relative flex justify-between items-center md:py-0 py-4 gap-4 w-full ${className}`}>
            <LinkCustom to='/' className='flex justify-center items-center ml-8 h-full text-3xl'>
                <Logo className='h-8' />
            </LinkCustom>
            <ThemeToggler />
            <NavLinks className={`nav-links ${menuActive && "active"}`} />
            <button className='mobile-menu outline-none' onClick={() => setMenuActive(!menuActive)}>
                <FontIcon className='flex cursor-pointer mr-8 md:hidden' icon={faBars} />
            </button>
        </StyledNavbar>
    );
};
