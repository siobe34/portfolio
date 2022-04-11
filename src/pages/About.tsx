import { useState } from 'react';
import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Span } from '../components/Span';
import { Collapsible } from '../components/Collapsible';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { List } from '../components/List';

const styleHighlight = {
    backgroundColor:'var(--primary)',
    color:'bg-primary-txt',
    padding:'.1rem .5rem',
    borderRadius:'.5rem',
    width:'fit-content'
}

function About() {
    const [TLDR, setTLDR] = useState<boolean>(false);
    return (
        <Container className="content" flexDirection="column" alignItems="center" gap="2rem" overflow="auto">
            <Header headerType='h1'>About Me</Header>
            <PageContent>
                <Container width="100%" gap="1rem" flexWrap='wrap' justifyContent="center">
                    <Button
                        width='calc(50% - .5rem)'
                        backgroundColor='red'
                        whiteSpace='revert'
                        onButtonClick={() => setTLDR(true)}
                    >
                        <Header headerType='h3' fontWeight='unset'>Show me a Summary!</Header>
                    </Button>
                    <Button
                        width='calc(50% - .5rem)'
                        whiteSpace='revert'
                        onButtonClick={() => setTLDR(false)}
                    >
                        <Header headerType='h3' fontWeight='unset'>Read in more detail</Header>
                    </Button>
                </Container>
                {
                    TLDR ?
                        <Container margin='3rem 0 0 0'>
                            <List listStyle='disc' lineSpacing='0 0 0.8rem 0' fontSize='1.2rem'>
                                <li>Experience with <span style={styleHighlight}>TypeScript</span> and <span style={styleHighlight}>JavaScript</span></li>
                                <li>Built full-stack applications with <span style={styleHighlight}>React</span>, <span style={styleHighlight}>NodeJS</span>,
                                    <span style={styleHighlight}>Python</span>, and <span style={styleHighlight}>MySQL</span></li>
                                <li>Deployed applications in the <span style={styleHighlight}>Cloud</span> and on <span style={styleHighlight}>local network</span></li>
                                <li>Comfortable in <span style={styleHighlight}>Linux</span> and <span style={styleHighlight}>Windows</span> environments</li>
                                <li>Strong understanding of Intelligent Transportation Systems <span style={styleHighlight}>(ITS)</span></li>
                                <li>Background in physical and logical <span style={styleHighlight}>Network Design</span></li>
                                <li>Experience with <span style={styleHighlight}>Pandas</span> for <span style={styleHighlight}>Data Analysis</span></li>
                                <li>Analyzed and evaluated automated Traffic Safety Systems</li>
                                <li>Ability to work independently within the context of a Team</li>
                                <li>General Project Management experience</li>
                                <li>Management of version control with <span style={styleHighlight}>Git</span></li>
                                <li>Knowledge of various DevOps technologies</li>
                                <li>Understanding of <span style={styleHighlight}>RestAPI</span> and <span style={styleHighlight}>Relational Database</span> design</li>
                            </List>
                        </Container>
                    : <Container flexDirection="column" alignItems='flex-start' margin='3rem 0 0 0'>
                        <Span backgroundColor='var(--primary)' color='var(--bg-primary-txt)' padding='.5rem .8rem' borderRadius='.5rem'>
                            <Header headerType='h3'>Tell me about yourself.</Header>
                        </Span>
                        <p style={{lineHeight:'1.5rem'}}>
                            Hi, my name's Ibad. I'm an engineer with strong work experience in various fields of Intelligent Transportation Systems (ITS).
                            My work with ITS has exposed me to several web applications related to Traffic Management/Safety Systems and this is where I
                            discovered my passion for Web Development. I found myself wanting to be the one who developed the applications I was working
                            with - so I set out on my journey to self-learn programming.
                            <br/>
                        </p>
                        <Collapsible collapseStyle={{alignSelf:'center'}}>
                            {/* <></> */}
                            <Span spanStyle={{alignSelf:'center', margin:'.5rem 0'}} backgroundColor='var(--primary)' color='var(--bg-primary-txt)' padding='.5rem .8rem' borderRadius='.5rem'>
                                <Header headerType='h3'>Read more about me</Header>
                            </Span>
                            <Container flexDirection="column">
                            <p>
                                I graduated in 2019 from Ryerson University with a Bachelor's in Engineering and began full-time the same summer. Since then,
                                I've refined my ability to manage my time, prioritize and track tasks, and of course, communicate effectively with my colleagues
                                and superiors. I believe my strongest assets are my ability to tackle assignments with initiative and adapt my skills according
                                to the task at hand.
                                <br/>
                                <br/>
                                My programming journey began with learning the basics using Python and making simple websites with vanilla JavaScript, HTML, and
                                CSS. After establishing some fundamentals, I moved onto learning React and a few backend frameworks connected to Databases. When
                                developing the projects seen in my portfolio, I learned best practices for designing relational databases, RestAPI's with CRUD
                                functions, and front-end UI's.
                                <br/>
                                <br/>
                                Currently, my full stack development experience consists mainly of personal projects but I believe I've reached a point where my
                                portfolio demonstrates my knowledge of web development can be an asset to any team.
                                <br/>
                                <br/>
                                Look forward to hearing from you (:
                            </p>
                            <Span spanStyle={{alignSelf:'flex-start'}} backgroundColor='var(--primary)' color='var(--bg-primary-txt)' padding='.5rem .8rem' borderRadius='.5rem'>
                                <Header headerType='h3'>What do you do outside of work?</Header>
                            </Span>
                            <p>
                                Well I love to learn so I'm usually learning something new, my latest obsession is
                                <Span backgroundColor='red' borderRadius='.5rem' padding='.25rem' width='fit-content'>(insert whatever I'm learning at the moment
                                here).</Span>
                                <br/>
                                Otherwise, my lifelong hobbies to date include reading, playing basketball, and dreaming about being good at pretty much any racquet
                                sport.
                            </p>
                            </Container>
                        </Collapsible>
                    </Container>
                }
            </PageContent>
        </Container>
    );
}

export default About;