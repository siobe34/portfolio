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
};

function UnstyledFooter({ className, setTheme }: PropTypes) {
    const theme = useContext(ThemeContext);

    const [modalState, setModalState] = useState<boolean>(false);
    const [recommendation, setRecommendation] = useState<string | null>(null);

    const randomInteger = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    async function getRecommendation(mediaType: string) {
        const opts = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(`http://127.0.0.1:1337/media/${mediaType}`, opts);
        const json = await response.json();

        if (response.status === 200 && json) {
            const length = json.length;
            return setRecommendation(json[randomInteger(0, length)]['title']);
        }

        setRecommendation(null);
    }

    return (
        <Container className={`footer ${className}`} containerStyle={{ justifyContent: 'space-between' }}>
            <Button onButtonClick={() => setModalState(!modalState)} buttonStyle={{ color: 'red' }}>
                <FontAwesomeIcon icon={faHeart} />
            </Button>
            <a href='https://github.com/siobe34' className='footer-txt'>
                <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
            <Button
                className='footer-txt'
                buttonStyle={{ margin: '0 0.5% 0 0' }}
                buttonHoverStyle={{ margin: '0 0.5% 0 0' }}
                onButtonClick={() => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))}
            >
                Switch to {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                <FontAwesomeIcon icon={faStarHalfStroke} className={theme === 'dark' ? 'star-left' : 'star-right'} style={{ marginLeft: '5px' }} />
            </Button>
            <Modal modalState={modalState} setModalState={setModalState}>
                <Header headerType='h1'>Media Recommendations</Header>
                <Container
                    containerStyle={{
                        margin: '3rem 0',
                        width: '80%',
                    }}
                >
                    <p style={{ lineHeight: '1.5rem' }}>
                        This started out as a simple front-end web app to serve as a portfolio/resume but I wanted to implement some sort of backend
                        so...<span>&#128071;</span>
                        <br />
                        <br />
                        <Span
                            spanStyle={{
                                color: 'var(--bg-primary-txt)',
                                backgroundColor: 'var(--secondary)',
                                borderRadius: '.2rem',
                                padding: '.5rem',
                            }}
                        >
                            Click any of the buttons below to get a recommendation of each respective media type based on some of my personal
                            favourite movies, shows, anime, and music.
                        </Span>
                    </p>
                </Container>
                <Container
                    containerStyle={{
                        gap: '1rem',
                        margin: '3rem 0',
                        width: '100%',
                    }}
                >
                    <Button buttonStyle={{ width: '100%', whiteSpace: 'revert' }} onButtonClick={() => getRecommendation('movies')}>
                        <FontAwesomeIcon icon={faClapperboard} style={{ marginRight: '0.5rem' }} />
                        Movies
                    </Button>
                    <Button buttonStyle={{ width: '100%', whiteSpace: 'revert' }} onButtonClick={() => getRecommendation('shows')}>
                        <FontAwesomeIcon icon={faTv} style={{ marginRight: '0.5rem' }} />
                        Shows
                    </Button>
                    <Button buttonStyle={{ width: '100%', whiteSpace: 'revert' }} onButtonClick={() => getRecommendation('anime')}>
                        <FontAwesomeIcon icon={faZap} style={{ marginRight: '0.5rem' }} />
                        Anime
                    </Button>
                    <Button buttonStyle={{ width: '100%', whiteSpace: 'revert' }} onButtonClick={() => getRecommendation('music')}>
                        <FontAwesomeIcon icon={faMusic} style={{ marginRight: '0.5rem' }} />
                        Music
                    </Button>
                </Container>
                {recommendation && (
                    <Span
                        spanStyle={{
                            color: 'var(--bg-primary-txt)',
                            backgroundColor: 'var(--secondary)',
                            borderRadius: '.2rem',
                            padding: '1rem 2rem',
                        }}
                    >
                        <Header headerType='h4' headerStyle={{ textTransform: 'uppercase' }}>
                            {recommendation}
                        </Header>
                    </Span>
                )}
            </Modal>
        </Container>
    );
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
`;
