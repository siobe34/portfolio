import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Span } from '../components/Span';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';

function Projects() {
    return (
        <Container className="content" flexDirection="column" alignItems="center" gap="2rem" overflow="auto">
            <Header headerType='h1'>Projects</Header>
            <PageContent>
                
                <Span backgroundColor='var(--primary)' color='var(--bg-primary-txt)' padding='1rem .8rem' borderRadius='.5rem' margin='0 0 3rem 0'>
                    <Header headerType='h4'>
                        Below are notable projects I've worked on in the past year along with demonstrations and respective development tools.
                    </Header>
                </Span>
                <Grid gap="2.5rem">
                    <Card flexDirection='column' margin='0'>
                        <Header headerType='h3' textDecoration='underline' lineHeight='2rem'>Finance Manager <br/><code style={{ color: 'red' }}>Come up with a better name!!</code></Header>
                        <p>
                            A tool to manage your budget on a transactional level with helpful charts to see historical
                            net worth, monthly categorical spending, and search the database in a with a user-friendly interface.
                        </p>
                        <Button margin='0 0 1rem 0'>Explore Working Demo</Button>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#f7e018' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>JavaScript</Button>
                            <Button backgroundColor='#2d79c7' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>TypeScript</Button>
                            <Button backgroundColor='#61dafb' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>React</Button>
                            <Button backgroundColor='#68a063' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NodeJS</Button>
                            <Button backgroundColor='#449945' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>MongoDB</Button>
                            <Button backgroundColor='#01992b' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NGINX</Button>
                            <Button backgroundColor='#ff7e00' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>AWS</Button>
                        </Container>
                    </Card>
                    <Card flexDirection='column' margin='0'>
                        <Header headerType='h3' textDecoration='underline' lineHeight='2rem'>Fibre Management</Header>
                        <p>
                            Uses Google Maps JS API to display various relationally linked geospatial entities on a
                            map interface, complete with user-friendly database management, and user management.
                        </p>
                        <Button margin='0 0 1rem 0'>View Demo</Button>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#f7e018' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>JavaScript</Button>
                            <Button backgroundColor='#2d79c7' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>TypeScript</Button>
                            <Button backgroundColor='#61dafb' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>React</Button>
                            <Button backgroundColor='#414bb2' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>Python</Button>
                            <Button backgroundColor='#414bb2' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>Flask</Button>
                            <Button backgroundColor='#f0902d' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>MySQL</Button>
                            <Button backgroundColor='#8a4810' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>MariaDB</Button>
                            <Button backgroundColor='#01992b' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NGINX</Button>
                        </Container>
                    </Card>
                    <Card flexDirection='column' margin='0'>
                        <Header headerType='h3' textDecoration='underline' lineHeight='2rem'>Personal Website</Header>
                        <p>
                            My portfolio/resume for potential employers to gauge my skills as a web developer.
                        </p>
                        <Button margin='0 0 1rem 0' whiteSpace='revert'>This is the website you're currently browsing.</Button>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#f7e018' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>JavaScript</Button>
                            <Button backgroundColor='#2d79c7' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>TypeScript</Button>
                            <Button backgroundColor='#61dafb' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>React</Button>
                            <Button backgroundColor='#68a063' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NodeJS</Button>
                            <Button backgroundColor='#449945' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>MongoDB</Button>
                            <Button backgroundColor='#000' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>GitHub Pages</Button>
                        </Container>
                    </Card>
                    <Card flexDirection='column' margin='0'>
                        <Header headerType='h3' textDecoration='underline' lineHeight='2rem'>Reddit's Favourite NBA Player</Header>
                        <p>
                            An algorithm using sentiment analysis to determine r/NBA's favourite and least-favourite players.
                        </p>
                        <Button margin='0 0 1rem 0'>View Results</Button>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#414bb2' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>Python</Button>
                            <Button backgroundColor='#414bb2' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>Jupyter Notebook</Button>
                        </Container>
                    </Card>
                </Grid>
            </PageContent>
        </Container>
    );
}

export default Projects;