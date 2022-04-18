import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStarHalfStroke, faZap, faClapperboard, faTv, faMusic, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import React, { useState, useContext, useRef } from 'react';
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

const styles = {
    mediaButton: {
        regular: {
            width: '100%',
            backgroundColor: 'var(--primary)',
            whiteSpace: 'revert' as 'revert',
            gap: '0.5rem',
        },
        highlight: {
            width: '100%',
            backgroundColor: 'var(--secondary)',
            whiteSpace: 'revert' as 'revert',
            gap: '0.5rem',
        },
    },
    recommendationContainer: {
        container: {
            width: '100%',
            justifyContent: 'center',
            gap: '1rem',
        },
        button: {
            width: '100%',
            fontSize: '1.2rem',
        },
    },
    recommendationInput: {
        container: {
            margin: '1rem 0',
            padding: '1rem 2rem',
            color: 'var(--bg-primary-txt)',
            backgroundColor: 'var(--secondary)',
            borderRadius: '.2rem',
        },
        input: {
            width: '200px',
            color: 'inherit',
            backgroundColor: 'inherit',
            outline: 'none',
            border: 'none',
            textAlign: 'center' as 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase' as 'uppercase',
        },
    },
};

function UnstyledFooter({ className, setTheme }: PropTypes) {
    const theme = useContext(ThemeContext);

    const modalRef = useRef<React.ElementRef<typeof Modal>>(null);
    const [media, setMedia] = useState<string | null>(null);
    const [recommendation, setRecommendation] = useState<string | null>(null);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setRecommendation(e.target.value);

    const randomInteger = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    async function getRecommendation() {
        const opts: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(`http://127.0.0.1:1337/media/${media}`, opts);
        const json = await response.json();
        if (response.status === 200 && json) {
            const length = json.length;
            return setRecommendation(json[randomInteger(0, length)]['title']);
        }
        setRecommendation(null);
    }

    async function makeRecommendation() {
        if (!recommendation) return setRecommendation('Type here!!');
        const opts: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: recommendation }),
        };
        const response = await fetch(`http://127.0.0.1:1337/media/${media}`, opts);
        const json = await response.json();
        if (response.status === 200 && json) {
            return setRecommendation("Thanks, I'll check it out!");
        }
        setRecommendation('Ran into an error ):');
    }

    return (
        <Container className={`footer ${className}`} containerStyle={{ justifyContent: 'space-between' }}>
            <Button
                onButtonClick={() => {
                    setMedia(null);
                    setRecommendation(null);
                    // @ts-ignore
                    modalRef.current?.handleModalState();
                }}
                buttonStyle={{ color: 'red' }}
            >
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
            <Modal ref={modalRef} modalStyle={{ height: 'fit-content' }}>
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
                <Header headerType='h3'>Select a type of media:</Header>
                <Container
                    containerStyle={{
                        gap: '1rem',
                        margin: '1rem 0 2rem 0',
                        width: '100%',
                    }}
                >
                    <Button
                        buttonStyle={media === 'movies' ? styles.mediaButton.highlight : styles.mediaButton.regular}
                        onButtonClick={() => setMedia('movies')}
                    >
                        <FontAwesomeIcon icon={faClapperboard} />
                        Movies
                    </Button>
                    <Button
                        buttonStyle={media === 'shows' ? styles.mediaButton.highlight : styles.mediaButton.regular}
                        onButtonClick={() => setMedia('shows')}
                    >
                        <FontAwesomeIcon icon={faTv} />
                        Shows
                    </Button>
                    <Button
                        buttonStyle={media === 'anime' ? styles.mediaButton.highlight : styles.mediaButton.regular}
                        onButtonClick={() => setMedia('anime')}
                    >
                        <FontAwesomeIcon icon={faZap} />
                        Anime
                    </Button>
                    <Button
                        buttonStyle={media === 'music' ? styles.mediaButton.highlight : styles.mediaButton.regular}
                        onButtonClick={() => setMedia('music')}
                    >
                        <FontAwesomeIcon icon={faMusic} />
                        Music
                    </Button>
                    <Button
                        buttonStyle={media === 'books' ? styles.mediaButton.highlight : styles.mediaButton.regular}
                        onButtonClick={() => setMedia('books')}
                    >
                        <FontAwesomeIcon icon={faBook} />
                        Book
                    </Button>
                </Container>
                <Container containerStyle={styles.recommendationContainer.container}>
                    <Button buttonStyle={styles.recommendationContainer.button} onButtonClick={() => getRecommendation()}>
                        Get a Recommendation
                    </Button>
                    <Button buttonStyle={styles.recommendationContainer.button} onButtonClick={() => makeRecommendation()}>
                        Give a Recommendation
                    </Button>
                </Container>
                <Container containerStyle={styles.recommendationInput.container}>
                    <input
                        style={styles.recommendationInput.input}
                        placeholder='Type a Recommendation'
                        value={recommendation || ''}
                        onChange={handleInput}
                    />
                </Container>
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
