import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Span } from '../components/Span';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';

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
        alignItems: 'center',
        paddingBottom: '1rem',
    },
    grid: {
        gap: '2.5rem',
    },
    card: {
        container: {
            flexDirection: 'column' as 'column',
            margin: '0',
        },
        header: {
            textDecoration: 'underline',
            lineHeight: '2rem',
        },
        button: {
            margin: '0 0 1rem 0',
            whiteSpace: 'revert' as 'revert',
        },
    },
    buttonContainer: {
        container: {
            flexWrap: 'wrap' as 'wrap',
            gap: '.5rem',
        },
        buttons: {
            light: {
                color: '#000',
                cursor: 'auto',
            },
            dark: {
                color: '#fff',
                cursor: 'auto',
            },
        },
        buttonsHover: {
            light: {
                color: '#fff',
                opacity: '0.5',
            },
            dark: {
                color: '#000',
                opacity: '0.5',
            },
        },
    },
    spanHighlight: {
        padding: '1rem',
        margin: '0 0 3rem 0',
        width: 'fit-content',
        borderRadius: '.5rem',
        backgroundColor: 'var(--primary)',
        color: 'var(--bg-primary-txt)',
    },
    text: {
        lineHeight: '1.2rem',
    },
};

function Projects() {
    return (
        <Container className='content' containerStyle={styles.contentContainer}>
            <Header headerType='h1'>Projects</Header>
            <PageContent pageContentStyle={styles.pageContent}>
                <Span spanStyle={styles.spanHighlight}>
                    <Header headerType='h4'>
                        Below are notable projects I've worked on in the past year along with demonstrations and respective development tools.
                    </Header>
                </Span>
                <Grid gridStyle={styles.grid}>
                    <Card cardStyle={styles.card.container}>
                        <Header headerType='h3' headerStyle={styles.card.header}>
                            Finance Manager
                        </Header>
                        <code style={{ color: 'red' }}>Come up with a better name!!</code>
                        <p style={styles.text}>
                            A tool to manage your budget on a transactional level with helpful charts to see historical net worth, monthly categorical
                            spending, and search the database in a with a user-friendly interface.
                        </p>
                        <Button buttonStyle={styles.card.button}>Explore Working Demo</Button>
                        <Container containerStyle={styles.buttonContainer.container}>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#f7e018' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.dark}
                            >
                                JavaScript
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#2d79c7' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                TypeScript
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#61dafb' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                React
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#68a063' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                NodeJS
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#449945' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                MongoDB
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#01992b' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                NGINX
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#ff7e00' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                AWS
                            </Button>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card.container}>
                        <Header headerType='h3' headerStyle={styles.card.header}>
                            Fibre Management
                        </Header>
                        <p style={styles.text}>
                            Uses Google Maps JS API to display various relationally linked geospatial entities on a map interface, complete with
                            user-friendly database management, and user management.
                        </p>
                        <Button buttonStyle={styles.card.button}>View Demo</Button>
                        <Container containerStyle={styles.buttonContainer.container}>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#f7e018' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.dark}
                            >
                                JavaScript
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#2d79c7' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                TypeScript
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#61dafb' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                React
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.dark, backgroundColor: '#414bb2' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                Python
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.dark, backgroundColor: '#414bb2' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                Flask
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#f0902d' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                MySQL
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.dark, backgroundColor: '#8a4810' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                MariaDB
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#01992b' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                NGINX
                            </Button>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card.container}>
                        <Header headerType='h3' headerStyle={styles.card.header}>
                            Personal Website
                        </Header>
                        <p style={styles.text}>My portfolio/resume for potential employers to gauge my skills as a web developer.</p>
                        <Button buttonStyle={styles.card.button}>This is the website you're currently browsing.</Button>
                        <Container containerStyle={styles.buttonContainer.container}>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#f7e018' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.dark}
                            >
                                JavaScript
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#2d79c7' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                TypeScript
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#61dafb' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                React
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#68a063' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                NodeJS
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.light, backgroundColor: '#449945' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                MongoDB
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.dark, backgroundColor: '#000' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                GitHub Pages
                            </Button>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card.container}>
                        <Header headerType='h3' headerStyle={styles.card.header}>
                            Reddit's Favourite NBA Player
                        </Header>
                        <p style={styles.text}>An algorithm using sentiment analysis to determine r/NBA's favourite and least-favourite players.</p>
                        <Button buttonStyle={styles.card.button}>View Results</Button>
                        <Container containerStyle={styles.buttonContainer.container}>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.dark, backgroundColor: '#414bb2' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                Python
                            </Button>
                            <Button
                                buttonStyle={{ ...styles.buttonContainer.buttons.dark, backgroundColor: '#414bb2' }}
                                buttonHoverStyle={styles.buttonContainer.buttonsHover.light}
                            >
                                Jupyter Notebook
                            </Button>
                        </Container>
                    </Card>
                </Grid>
            </PageContent>
        </Container>
    );
}

export default Projects;
