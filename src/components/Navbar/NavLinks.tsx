import { INavLinks } from "../../types/INavbar";

import { LinkCustom } from "../LinkCustom";
import { List, ListItem } from "../List";
import { SocialMediaLinks } from "./SocialMediaLinks";

import { SITE_ROUTES, NAV_ROUTES } from "./SiteRoutes";

export const NavLinks = ({ className, children }: INavLinks) => {
    return (
        <List
            className={`absolute top-full hidden flex-col justify-center items-center m-0 p-0 w-full z-50 md:static md:flex md:flex-row md:gap-8 md:mr-8 md:w-auto md:h-full ${className}`}
        >
            {children && children}
            {SITE_ROUTES.map((siteRoute) => {
                if (NAV_ROUTES.includes(siteRoute.path)) {
                    return (
                        <ListItem key={siteRoute.path}>
                            <LinkCustom to={siteRoute.path} animatedLink>
                                {siteRoute.routeTitle}
                            </LinkCustom>
                        </ListItem>
                    );
                }
                return null;
            })}
            <SocialMediaLinks />
        </List>
    );
};
