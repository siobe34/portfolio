import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

function Resume() {
    return (
        <Container className="content" flexDirection="column" alignItems="center" gap="2rem" overflow="auto">
            <Header headerType='h1'>Resume</Header>
            <Container width='65vw' justifyContent='center' flexDirection='column' gap="2rem">
                <Button width='60%'>Download PDF</Button>
                <Container backgroundColor='red' padding='2rem' borderRadius='.5rem'>
                    <Header headerType='h1'>Embed resume in web page</Header>
                </Container>
            </Container>
        </Container>
    );
}

export default Resume;