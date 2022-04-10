import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStarHalfStroke, faZap, faClapperboard, faTv, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import { useState, useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Container } from './Container';
import { Span } from './Span';
import { Header } from './Header';
import { Button } from './Button';
import { Modal } from './Modal';

type PropTypes = {
    className?: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function UnstyledFooter({ className, setTheme }: PropTypes) {
    const theme = useContext(ThemeContext);
    
    const [modalState, setModalState] = useState<boolean>(false);
    const [recommendation, setRecommendation] = useState<string | null>(null);
    
    const randomInteger = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function getRecommendation(mediaType: string) {
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
                }
            };
        const response = await fetch(`http://127.0.0.1:1337/${mediaType}`, opts);
        const json = await response.json();
        
        if (response.status !== 200) setRecommendation(null);
        const length = json.length;
        setRecommendation(json[randomInteger(0, length)]);
    };
    
    return (
        <Container className={`footer ${className}`} justifyContent="space-between">
            <Button onButtonClick={() => setModalState(!modalState)} className='rainbow'>
                <FontAwesomeIcon icon={faHeart}/>
            </Button>
            <a href="https://github.com/siobe34" className='footer-txt'>
                <FontAwesomeIcon icon={faGithub} size='lg'/>
            </a>
            <Button
                className="footer-txt"
                margin={'0 0.5% 0 0'}
                onButtonClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}
            >
                Switch to {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                <FontAwesomeIcon icon={faStarHalfStroke} className={theme === 'dark' ? 'star-left' : 'star-right'} style={{marginLeft: '5px'}} />
            </Button>
            <Modal modalState={modalState} setModalState={setModalState}>
                <Header headerType='h1'>Media Recommendations</Header>
                <Container margin='3rem 0' width='80%'>
                    <p style={{lineHeight: '1.5rem'}}>
                        This started out as a simple front-end web app to serve as a portfolio/resume but I wanted to implement some sort of backend so...<span>&#128071;</span>
                        <br/>
                        <br/>
                        <Span color='var(--txt-secondary)' backgroundColor='var(--secondary)' borderRadius='.2rem' padding='.5rem'>
                            Click any of the buttons below to get a recommendation of each respective media type based on some of my personal favourite movies,
                            shows, anime, and music.
                        </Span>
                    </p>
                </Container>
                <Container gap='1rem' margin='3rem 0' width='100%'>
                    <Button
                        width='100%'
                        onButtonClick={() => getRecommendation('movies')}
                    >
                        <FontAwesomeIcon icon={faClapperboard} style={{marginRight:'0.5rem'}}/>Movies
                    </Button>
                    <Button
                        width='100%'
                        onButtonClick={() => getRecommendation('shows')}
                    >
                        <FontAwesomeIcon icon={faTv} style={{marginRight:'0.5rem'}}/>Shows
                    </Button>
                    <Button
                        width='100%'
                        onButtonClick={() => getRecommendation('anime')}
                    >
                        <FontAwesomeIcon icon={faZap} style={{marginRight:'0.5rem'}}/>Anime
                    </Button>
                    <Button
                        width='100%'
                        onButtonClick={() => getRecommendation('music')}
                    >
                        <FontAwesomeIcon icon={faMusic} style={{marginRight:'0.5rem'}}/>Music
                    </Button>
                </Container>
                {
                    recommendation &&
                    <Span color='var(--txt-secondary)' backgroundColor='var(--secondary)' borderRadius='.2rem' padding='1rem 2rem'>
                        <Header headerType='h4' textTransform='uppercase'>{ recommendation }</Header>
                    </Span>
                }
            </Modal>
        </Container>
    )
}

export const Footer = styled(UnstyledFooter)`
    background-color: var(--bg-primary);
    
    & > .footer-txt {
        color: var(--bg-primary-txt);
    }
    
    & .star-left {
        transition: all 0.5s ease-out;
    }
    
    & .star-right {
        transform: rotateY(180deg);
        transition: all 0.5s ease-out;
    }
    
    @keyframes rainbow {
        0% {color:white}
        10% {color:lightblue}
        20% {color:orange}
        30% {color:lightgreen}
        40% {color:red}
        50% {color:lightpurple}
        60% {color:yellow}
        70% {color:pink}
        80% {color:palegreen}
        90% {color:yellow}
        100% {color:lightgrey}
    }
    & .rainbow {
        animation: rainbow 10s infinite ease-out;
    }
`