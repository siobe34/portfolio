import styled from "styled-components";

type PropTypes = {
    className?: string;
};

const UnstyledLogo = ({ className }: PropTypes) => {
    return (
        <svg className={className} version='1.1' width='256px' height='256px' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
            <g>
                <path className='logo-path' d='M 30 0 l 30 30 -30 30 -30 -30 30 -30' />
                <path className='logo-path' d='M 30 85 l 30 -30 0 201 -60 0 0 -201 30 30' />
                <path className='logo-path' d='M 155 0 l -60 0 0 256 60 0 0 -146' />
                <path className='logo-path' d='M 155 0 C 306 15 266 145 155 160 l 0 -50 c 90 -40 0 -65 0 -60' />
                <path className='logo-path' d='M 211 256 l -150 -138 45 -45 L 256 211 l 0 45 -45 0' />
            </g>
        </svg>
    );
};

export const Logo = styled(UnstyledLogo)`
    width: auto;
    & .logo-path {
        fill: ${(props) => (props.theme.current === "light" ? "black" : "white")};
        paint-order: stroke fill;
        animation: logo-stroke 1500ms ease-in, logo-fill 1500ms ease-in;
    }
    @keyframes logo-stroke {
        from {
            stroke: ${(props) => props.theme.primary};
            stroke-width: 5px;
            stroke-opacity: 1;
            stroke-dasharray: 100%;
            stroke-dashoffset: 100%;
        }
        to {
            stroke: ${(props) => props.theme.primary};
            stroke-width: 0;
            stroke-opacity: 0;
            stroke-dasharray: 400%;
            stroke-dashoffset: 100%;
        }
    }
    @keyframes logo-fill {
        from {
            fill: transparent;
        }
        to {
            fill: ${(props) => (props.theme.current === "light" ? "black" : "white")};
        }
    }
`;
