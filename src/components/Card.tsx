import styled from 'styled-components';

type CardProps = {
    children: React.ReactNode;
    className?: string;
    column?: string;
    image?: string;
    imageSize?: {x:string, y:string};
}

const UnstyledCard = ({ className, children, image, imageSize }: CardProps) => {
    return (
        <div className={className}>
            {
                image && imageSize ?
                    <img
                        src={image}
                        width={imageSize.x}
                        height={imageSize.y}
                        alt="card-description"
                        style={{justifySelf: 'flex-start'}}
                    />
                : null
            }
            {children}
        </div>
    )
}

export const Card = styled(UnstyledCard)`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
    width: 40vw;
    margin: 2rem;
    padding: 2rem;
    color: black;
    box-shadow: .5rem .5rem 0 black;
    border: .2rem solid teal;
    border-radius: .8rem;
`