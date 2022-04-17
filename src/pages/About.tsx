import { useState } from 'react';
import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Span } from '../components/Span';
import { Collapsible } from '../components/Collapsible';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { List } from '../components/List';

const styles = {
    contentContainer: {
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        gap: '2rem',
        overflow: 'auto',
    },
    subcontentContainer: {
        flexDirection: 'column' as 'column',
        alignItems: 'flex-start',
        margin: '2rem 0 0 0',
    },
    collapsible: {
        container: {
            alignSelf: 'center',
        },
        button: {
            flexDirection: 'column' as 'column',
            width: 'fit-content',
            backgroundColor: 'var(--secondary)',
        },
    },
    summaryButton: {
        container: {
            flexWrap: 'wrap' as 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
        },
        button: {
            width: 'calc(50% - .5rem)',
            whiteSpace: 'revert' as 'revert',
        },
        buttonHover: {
            color: 'white',
        },
        header: {
            fontWeight: 'unset',
        },
    },
    summaryList: {
        container: {
            listStyleType: 'disc',
            paddingInlineStart: '2rem',
            lineHeight: '2rem',
        },
        listItem: {
            margin: '0 0 0.8rem 0',
            fontSize: '1.2rem',
        },
    },
    spanHighlight: {
        padding: '.1rem .5rem',
        width: 'fit-content',
        borderRadius: '.5rem',
        backgroundColor: 'var(--primary)',
        color: 'var(--bg-primary-txt)',
    },
    text: {
        lineHeight: '1.5rem',
    },
};

function About() {
    const [TLDR, setTLDR] = useState<boolean>(false);

    return (
        <Container animate className='content' containerStyle={styles.contentContainer}>
            <Header headerType='h1'>About Me</Header>
            <PageContent>
                <Container containerStyle={styles.summaryButton.container}>
                    <Button
                        buttonStyle={{ ...styles.summaryButton.button, backgroundColor: '#842029', color: '#fff' }}
                        buttonHoverStyle={styles.summaryButton.buttonHover}
                        onButtonClick={() => setTLDR(true)}
                    >
                        <Header headerType='h3'>Show me a Summary!</Header>
                    </Button>
                    <Button buttonStyle={styles.summaryButton.button} onButtonClick={() => setTLDR(false)}>
                        <Header headerType='h3' headerStyle={styles.summaryButton.header}>
                            Read in more detail
                        </Header>
                    </Button>
                </Container>
                {TLDR ? (
                    <Container containerStyle={styles.subcontentContainer}>
                        <List listStyle={styles.summaryList.container} listItemStyle={styles.summaryList.listItem}>
                            <li>
                                Experience with <span style={styles.spanHighlight}>TypeScript</span> and{' '}
                                <span style={styles.spanHighlight}>JavaScript</span>
                            </li>
                            <li>
                                Built full-stack applications with <span style={styles.spanHighlight}>React</span>,{' '}
                                <span style={styles.spanHighlight}>NodeJS</span>,<span style={styles.spanHighlight}>Python</span>, and{' '}
                                <span style={styles.spanHighlight}>MySQL</span>
                            </li>
                            <li>
                                Deployed applications in the <span style={styles.spanHighlight}>Cloud</span> and on{' '}
                                <span style={styles.spanHighlight}>local network</span>
                            </li>
                            <li>
                                Comfortable in <span style={styles.spanHighlight}>Linux</span> and <span style={styles.spanHighlight}>Windows</span>{' '}
                                environments
                            </li>
                            <li>
                                Strong understanding of Intelligent Transportation Systems <span style={styles.spanHighlight}>(ITS)</span>
                            </li>
                            <li>
                                Background in physical and logical <span style={styles.spanHighlight}>Network Design</span>
                            </li>
                            <li>
                                Experience with <span style={styles.spanHighlight}>Pandas</span> for{' '}
                                <span style={styles.spanHighlight}>Data Analysis</span>
                            </li>
                            <li>Analyzed and evaluated automated Traffic Safety Systems</li>
                            <li>Ability to work independently within the context of a Team</li>
                            <li>General Project Management experience</li>
                            <li>
                                Management of version control with <span style={styles.spanHighlight}>Git</span>
                            </li>
                            <li>Knowledge of various DevOps technologies</li>
                            <li>
                                Understanding of <span style={styles.spanHighlight}>RestAPI</span> and{' '}
                                <span style={styles.spanHighlight}>Relational Database</span> design
                            </li>
                        </List>
                    </Container>
                ) : (
                    <Container containerStyle={styles.subcontentContainer}>
                        <Span spanStyle={{ ...styles.spanHighlight, padding: '.5rem .8rem' }}>
                            <Header headerType='h3'>Tell me about yourself.</Header>
                        </Span>
                        <p style={styles.text}>
                            Hi, my name's Ibad. I'm an engineer with strong work experience in various fields of Intelligent Transportation Systems
                            (ITS). My work with ITS has exposed me to several web applications related to Traffic Management/Safety Systems and this
                            is where I discovered my passion for Web Development. I found myself wanting to be the one who developed the applications
                            I was working with - so I set out on my journey to self-learn programming.
                            <br />
                        </p>
                        <Collapsible collapseStyle={styles.collapsible.container} collapseButtonStyle={styles.collapsible.button}>
                            <Span spanStyle={{ ...styles.spanHighlight, alignSelf: 'center', backgroundColor: 'inherit' }}>
                                <Header headerType='h3'>Read more about me</Header>
                            </Span>
                            <Container containerStyle={{ ...styles.subcontentContainer, margin: 0 }}>
                                <p style={styles.text}>
                                    I graduated in 2019 from Ryerson University with a Bachelor's in Engineering and began full-time the same summer.
                                    Since then, I've refined my ability to manage my time, prioritize and track tasks, and of course, communicate
                                    effectively with my colleagues and superiors. I believe my strongest assets are my ability to tackle assignments
                                    with initiative and adapt my skills according to the task at hand.
                                    <br />
                                    <br />
                                    My programming journey began with learning the basics using Python and making simple websites with vanilla
                                    JavaScript, HTML, and CSS. After establishing some fundamentals, I moved onto learning React and a few backend
                                    frameworks connected to Databases. When developing the projects seen in my portfolio, I learned best practices for
                                    designing relational databases, RestAPI's with CRUD functions, and front-end UI's.
                                    <br />
                                    <br />
                                    Currently, my full stack development experience consists mainly of personal projects but I believe I've reached a
                                    point where my portfolio demonstrates my knowledge of web development can be an asset to any team.
                                    <br />
                                    <br />
                                    Look forward to hearing from you (:
                                </p>
                                <Span spanStyle={{ ...styles.spanHighlight, alignSelf: 'flex-start', padding: '.5rem .8rem' }}>
                                    <Header headerType='h3'>What do you do outside of work?</Header>
                                </Span>
                                <p style={styles.text}>
                                    Well I love to learn so I'm usually learning something new, my latest obsession is
                                    <Span spanStyle={{ ...styles.spanHighlight, backgroundColor: 'red' }}>
                                        (insert whatever I'm learning at the moment here).
                                    </Span>
                                    <br />
                                    Otherwise, my lifelong hobbies to date include reading, playing basketball, and dreaming about being good at
                                    pretty much any racquet sport.
                                </p>
                            </Container>
                        </Collapsible>
                    </Container>
                )}
            </PageContent>
        </Container>
    );
}

export default About;
