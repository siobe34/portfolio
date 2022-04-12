import { Container } from '../components/Container';
import { Header } from '../components/Header';

const styles = {
    contentContainer: {
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        gap: '2rem',
        overflow: 'auto',
    },
};

function PageNotFound() {
    return (
        <Container className='content' containerStyle={styles.contentContainer}>
            <Header headerType='h1'>404 Page Not Found</Header>
            <Header headerType='h3'>
                Sorry it seems this link is broken or simply does not exist.
                <span>&#128547;</span>
            </Header>
        </Container>
    );
}

export default PageNotFound;
