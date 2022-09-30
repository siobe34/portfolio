import styled from "styled-components";

import { ICard } from "../types/ICard";

const StyledCard = styled.div`
    background-color: ${(props) => props.theme.bgEl2};
    // TODO remove unused styles
    // box-shadow: 0.25rem 0.25rem 0 ${(props) => props.theme.bgEl2};
    // border: 0.25rem solid ${(props) => props.theme.bgEl2}};
`;

export const Card = ({ className, children, image, imageSize, imageClassName }: ICard) => {
    return (
        <StyledCard className={`flex justify-center items-center p-4 w-auto rounded-xl ${className}`}>
            {image && imageSize ? (
                <img className={imageClassName} src={image} width={imageSize.x} height={imageSize.y} alt='card-description' />
            ) : null}
            {children}
        </StyledCard>
    );
};
