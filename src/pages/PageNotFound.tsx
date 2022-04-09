import { Container } from '../components/Container';
import { Header } from '../components/Header';

function PageNotFound() {
    return (
        <Container className="content" flexDirection="column" alignItems="center" gap="2rem" overflow="auto">
            <Header headerType='h1'>404 Page Not Found</Header>
            <Header headerType='h3'>Sorry it seems this link is broken or simply does not exist.<span>&#128547;</span></Header>
        </Container>
    );
}

export default PageNotFound;