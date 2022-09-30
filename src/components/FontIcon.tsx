import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { IFontIcon } from "../types/IFontIcon";

const UnstyledFontIcon = ({ className, icon }: IFontIcon) => {
    return <FontAwesomeIcon icon={icon} className={className} />;
};

export const FontIcon = styled(UnstyledFontIcon)`
    &:hover {
        color: ${(props) => (props.highlight ? props.theme.secondary : "inherit")};
        opacity: 0.75;
    }
`;
