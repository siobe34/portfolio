import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ListItem } from "../List";
import { FontIcon } from "../FontIcon";

export const SocialMediaLinks = () => {
    return (
        <>
            <ListItem>
                <a href='https://github.com/siobe34/portfolio'>
                    <FontIcon className='text-2xl' icon={faGithub} />
                </a>
            </ListItem>
        </>
    );
};
