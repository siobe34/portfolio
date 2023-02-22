import styled from "styled-components";
import { motion } from "framer-motion";

import { IContent } from "../types/IContent";

const StyledContent = styled(motion.main)`
    color: ${(props) => props.theme.txtonBg};
    background-color: ${(props) => props.theme.bgEl1};
`;

export const Content = ({ className, children }: IContent) => {
    return (
        <StyledContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`content relative flex flex-col justify-start items-center h-fit min-h-full ${className}`}
        >
            {children}
        </StyledContent>
    );
};
