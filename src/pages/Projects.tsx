import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';

function Projects() {
    return (
        <Container className="content" flexDirection="column" alignItems="center" gap="2rem" overflow="auto">
            <Header headerType='h1'>Projects</Header>
            <div style={{ width: '65vw'}}>
                <Grid gap="2.5rem">
                    <Card flexDirection='column' margin='0'>
                        <Header headerType='h3'>Finance Manager <br/><code style={{ color: 'red' }}>Come up with a better name!!</code></Header>
                        <p>Project description.</p>
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
                        <Header headerType='h3'>Fibre Management</Header>
                        <p>Project description.</p>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#f7e018' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>JavaScript</Button>
                            <Button backgroundColor='#2d79c7' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>TypeScript</Button>
                            <Button backgroundColor='#61dafb' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>React</Button>
                            <Button backgroundColor='#68a063' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NodeJS</Button>
                            <Button backgroundColor='#449945' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>MongoDB</Button>
                            <Button backgroundColor='#ff7e00' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>AWS</Button>
                            <Button backgroundColor='#01992b' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NGINX</Button>
                        </Container>
                    </Card>
                    <Card flexDirection='column' margin='0'>
                        <Header headerType='h3'>Personal Website</Header>
                        <p>Project description.</p>
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
                        <Header headerType='h3'>Reddit's Favourite NBA Player</Header>
                        <p>Project description.</p>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#414bb2' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>Python</Button>
                            <Button backgroundColor='#414bb2' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>Jupyter Notebook</Button>
                        </Container>
                    </Card>
                </Grid>
            </div>
        </Container>
    );
}

export default Projects;