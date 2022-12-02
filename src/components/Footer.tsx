import styled from "styled-components";

import { NavLinks } from "./Navbar/NavLinks";
import { ListItem } from "./List";
import { LinkCustom } from "./LinkCustom";
import { SITE_ROUTES } from "./Navbar/SiteRoutes";

const StyledFooter = styled.div`
    color: ${(props) => props.theme.txtonPrim};
    background-color: ${(props) => props.theme.primary};

    //* Override the styling in NavLinks to position the Links below the Navbar
    & .override-navlinks-footer {
        position: static;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        z-index: 25;
    }
    //* Desktop Styling
    @media all and (min-width: 768px) {
        & .override-navlinks-footer {
            flex-direction: row;
        }
    }
`;

export const Footer = () => {
    return (
        <StyledFooter className='flex justify-center py-12 w-full mt-auto'>
            <NavLinks className='override-navlinks-footer'>
                <ListItem>
                    <LinkCustom to={SITE_ROUTES[0].path} animatedLink>
                        {SITE_ROUTES[0].routeTitle}
                    </LinkCustom>
                </ListItem>
            </NavLinks>
        </StyledFooter>
    );
};
