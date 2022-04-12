import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

const styles = {
    contentContainer: {
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        gap: '2rem',
        overflow: 'auto',
    },
    downloadButton: {
        width: '60%',
    },
};

function Resume() {
    return (
        <Container className='content' containerStyle={styles.contentContainer}>
            <Header headerType='h1'>Resume</Header>
            <PageContent>
                <Button buttonStyle={styles.downloadButton}>Download PDF</Button>
                <Container containerStyle={{ backgroundColor: 'red', padding: '2rem', borderRadius: '.5rem' }}>
                    <Header headerType='h1'>Embed resume in web page</Header>
                </Container>
            </PageContent>
        </Container>
    );
}

export default Resume;
