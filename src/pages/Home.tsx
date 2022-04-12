import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import ThemeContext from '../components/ThemeContext';
import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import imgAbout from '../assets/aboutme.svg';
import imgProjects from '../assets/projects.svg';
import imgTech from '../assets/techstack.svg';
import imgResume from '../assets/resume.svg';
import logo from '../assets/initials.svg';

const styles = {
    contentContainer: {
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        gap: '2rem',
        overflow: 'auto',
    },
    pageContent: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        paddingBottom: '1rem',
    },
    header: {
        name: {
            fontSize: '32px',
        },
        uni: {
            fontWeight: 'inherit',
        },
    },
    grid: {
        padding: '1rem 0 0 0',
        gap: '2rem',
    },
    card: {
        flexDirection: 'column' as 'column',
    },
    cardHighlight: {
        flexDirection: 'column' as 'column',
        border: '.2rem solid var(--secondary)',
        boxShadow: '.5rem .5rem 0 var(--primary)',
    },
    logo: {
        backgroundColor: 'inherit',
        margin: '1rem',
        height: '96px',
        opacity: '1',
        cursor: 'auto',
    },
    button: {
        color: 'revert',
        backgroundColor: 'var(--secondary)',
    },
    buttonHover: {
        color: 'revert',
        backgroundColor: 'var(--secondary)',
    },
    buttonActive: {
        color: 'revert',
        backgroundColor: 'var(--secondary)',
    },
    link: {
        color: 'inherit',
        fontSize: '20px',
        textDecoration: 'none',
    },
};

function Home() {
    const theme = useContext(ThemeContext);

    return (
        <Container className='content' containerStyle={styles.contentContainer}>
            <PageContent pageContentStyle={styles.pageContent}>
                <Button buttonStyle={theme === 'dark' ? { ...styles.logo, filter: 'invert(1)' } : styles.logo}>
                    <img src={logo} alt='logo' style={{ height: 'inherit' }} />
                </Button>
                <Header headerType='h2' headerStyle={styles.header.name}>
                    Ibad Rashid
                </Header>
                <Header headerType='h4' headerStyle={styles.header.uni}>
                    Ryerson Univerity
                </Header>
                <Header headerType='h4'>BEng</Header>
                <Grid gridStyle={styles.grid}>
                    <Card image={imgAbout} imageSize={{ x: '180px', y: '180px' }} cardStyle={styles.card}>
                        <Button buttonStyle={styles.button}>
                            <a href='/about-me' style={styles.link}>
                                Read about me <FontAwesomeIcon icon={faLongArrowRight} />
                            </a>
                        </Button>
                    </Card>
                    <Card image={imgProjects} imageSize={{ x: '180px', y: '180px' }} cardStyle={styles.cardHighlight}>
                        <Button>
                            <a href='/projects' style={styles.link}>
                                Check out the projects I've worked on <FontAwesomeIcon icon={faLongArrowRight} />
                            </a>
                        </Button>
                    </Card>
                    <Card image={imgResume} imageSize={{ x: '180px', y: '180px' }} cardStyle={styles.card}>
                        <Button buttonStyle={styles.button}>
                            <a href='/resume' style={styles.link}>
                                See a formal Resume <FontAwesomeIcon icon={faLongArrowRight} />
                            </a>
                        </Button>
                    </Card>
                    <Card image={imgTech} imageSize={{ x: '180px', y: '180px' }} cardStyle={styles.card}>
                        <Button buttonStyle={styles.button}>
                            <a href='/technical-skills' style={styles.link}>
                                View the tech stacks I'm familiar with <FontAwesomeIcon icon={faLongArrowRight} />
                            </a>
                        </Button>
                    </Card>
                </Grid>
            </PageContent>
        </Container>
    );
}

export default Home;
