import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    image?: string;
    imageSize?: {x:string, y:string};
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    margin?: string;
    padding?: string;
    overflow?: string;
    boxShadow?: string;
    border?: string;
    borderRadius?: string;
}

const UnstyledCard = ({ className, children, image, imageSize }: PropTypes) => {
    return (
        <div className={className}>
            {
                image && imageSize ?
                    <img
                        src={image}
                        width={imageSize.x}
                        height={imageSize.y}
                        alt="card-description"
                        style={{paddingRight: '.5rem'}}
                    />
                : null
            }
            {children}
        </div>
    )
}

export const Card = styled(UnstyledCard)`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    margin: ${props => props.margin ? props.margin : '0 0 2rem 0'};
    padding: ${props => props.padding ? props.padding : '2rem'};
    overflow: ${props => props.overflow ? props.overflow : 'hidden'};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : '.5rem .5rem 0 var(--secondary)'};
    border: ${props => props.border ? props.border : '.2rem solid var(--primary)'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '.8rem'};
`