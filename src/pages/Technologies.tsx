import { Container } from '../components/Container';
import { PageContent } from '../components/PageContent';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';
import { Collapsible } from '../components/Collapsible';
import Logos from '../components/Logos';

const styles = {
    contentContainer: {
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        gap: '2rem',
        overflow: 'auto',
    },
    pageContent: {
        paddingBottom: '1rem',
    },
    grid: {
        parent: {
            gap: '2.5rem',
        },
        child: {
            gap: '0.5rem',
        },
    },
    card: {
        flexDirection: 'column' as 'column',
        gap: '0.5rem',
        padding: '0.5rem',
        margin: '0',
    },
    nestedCard: {
        flexDirection: 'column' as 'column',
        padding: '0',
        margin: '0',
        boxShadow: 'none',
    },
    cardContainer: {
        flexDirection: 'column' as 'column',
        gap: '0.25rem',
    },
    cardCollapsible: {
        buttonHover: {
            color: 'var(--secondary)',
        },
    },
    cardContentList: {
        listStyleType: 'disc',
        paddingInlineStart: '2rem',
    },
};

function Technologies() {
    return (
        <Container animate className='content' containerStyle={styles.contentContainer}>
            <Header headerType='h1'>Technical Skills</Header>
            <PageContent pageContentStyle={styles.pageContent} width='85vw' mobileWidth='90vw'>
                <Grid gridStyle={styles.grid.parent}>
                    <Card cardStyle={styles.card} image={Logos.react} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>React</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Just some test text to determine widths.</li>
                                    <li>Dummy test text to determine</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li>Collapsible Content</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.typescript} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>TypeScript</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Transitioned to TypeScript after developing understanding of vanilla JavaScript.</li>
                                    <li>Fell in love with static types because it makes test-driven development so much easier!</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.javascript} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>JavaScript</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <Grid gridStyle={styles.grid.child} childFlex='1 0 25%'>
                                    <Card cardStyle={styles.nestedCard} image={Logos.react} imageSize={{ x: '80%', y: '80%' }}>
                                        <></>
                                    </Card>
                                    <Card cardStyle={styles.nestedCard} image={Logos.reactrouter} imageSize={{ x: '80%', y: '80%' }}>
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={styles.nestedCard}
                                        image={Logos.styledcomponents}
                                        imageSize={{ x: '80%', y: '80%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                    <Card cardStyle={styles.nestedCard} image={Logos.bootstrap} imageSize={{ x: '80%', y: '80%' }}>
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={styles.nestedCard}
                                        image={Logos.jquery}
                                        imageSize={{ x: '80%', y: '80%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                    <Card cardStyle={styles.nestedCard} image={Logos.express} imageSize={{ x: '80%', y: '80%' }} darkMode>
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={{ ...styles.nestedCard, height: '5rem' }}
                                        image={Logos.nodejs}
                                        imageSize={{ x: '80%', y: '80%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                </Grid>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.python} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Python</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <Grid gridStyle={styles.grid.child} childFlex='1 0 25%'>
                                    <Card cardStyle={styles.nestedCard} image={Logos.flask} imageSize={{ x: '80%', y: '80%' }} darkMode>
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={styles.nestedCard}
                                        image={Logos.pandas}
                                        imageSize={{ x: '80%', y: '80%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={styles.nestedCard}
                                        image={Logos.sqlalchemy}
                                        imageSize={{ x: '80%', y: '20%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                </Grid>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.database} imageSize={{ x: '64px', y: '64px' }} darkMode>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Databases</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <Grid gridStyle={styles.grid.child} childFlex='1 0 25%'>
                                    <Card cardStyle={styles.nestedCard} image={Logos.mysql} imageSize={{ x: '80%', y: '80%' }}>
                                        <></>
                                    </Card>
                                    <Card cardStyle={styles.nestedCard} image={Logos.mariadb} imageSize={{ x: '80%', y: '80%' }}>
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={styles.nestedCard}
                                        image={Logos.sqlite}
                                        imageSize={{ x: '80%', y: '80%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                    <Card
                                        cardStyle={styles.nestedCard}
                                        image={Logos.mongodb}
                                        imageSize={{ x: '80%', y: '80%' }}
                                        imageStyle={{ backgroundColor: 'white', borderRadius: '.5rem' }}
                                    >
                                        <></>
                                    </Card>
                                </Grid>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.restAPI} imageSize={{ x: '64px', y: '64px' }} darkMode>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>RestAPI</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Designed endpoints adhering to RestAPI best practices.</li>
                                    <li>Implemented endpoints with CRUD operations when it was the best approach.</li>
                                    <li>Used test-driven development approach to develop endpoints with standard HTTP response codes.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.nginx} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>NGINX</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Designed endpoints adhering to RestAPI best practices.</li>
                                    <li>Implemented endpoints with CRUD operations when it was the best approach.</li>
                                    <li>Used test-driven development approach to develop endpoints with standard HTTP response codes.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.googlemaps} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Google Maps JS API</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Developed mobile-friendly web application to view various geospatial assets.</li>
                                    <li>Leveraged Google Maps JS API to create custom components to represent various geospatial assets.</li>
                                    <li>Designed relational database to seamlessly connect different types of geospatial assets.</li>
                                    <li>Implemented responsive UI to manage the database of geospatial assets.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.projectmanagement} imageSize={{ x: '64px', y: '64px' }} darkMode>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Project Management</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Client Correspondence</li>
                                    <li>Technical Writing</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.github} imageSize={{ x: '64px', y: '64px' }} darkMode>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>GitHub</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Used Git for version control of personal projects.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>

                    <Card cardStyle={styles.card} image={Logos.HTML} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>HTML5</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Began self-taught web development journey learning vanilla HTML/CSS/JS to establish basic understanding.</li>
                                    <li>Progressed to learning web template frameworks such as Jinja2.</li>
                                    <li>
                                        After establishing basic understanding, developed personal projects using web development frameworks such as
                                        React.
                                    </li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.CSS} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>CSS3</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Developed simple applications with vanilla CSS establishing understanding of basic concepts.</li>
                                    <li>Re-factored to use CSS frameworks like Styled Components.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.docker} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Docker</Header>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.portainer} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Portainer</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Managed container stacks in a homelab environment.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.ubuntu} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Ubuntu</Header>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.debian} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Debian</Header>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.powerBI} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Power BI</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Compiled data for Travel Time routes across the GTA to show in a user-friendly interface.</li>
                                    <li>Implemented interactive elements to filter various Travel Time routes and respective ITS sensors.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.selenium} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Selenium</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Evaluated accuracy of automated Intelligent Transportation Systems (ITS) using Selenium.</li>
                                    <li>Automated process to compile Travel Times from ON511.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.traefik} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Traefik</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Reverse proxy for various open-source services in homelab environment.</li>
                                    <li>Protected with TLS/SSL certificates.</li>
                                    <li>Configured personal wildcard domain to host internal services.</li>
                                    <li>Spun up with Portainer using Docker containers.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.proxmox} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Proxmox</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Type 1 Hypervisor used in homelab environment.</li>
                                    <li>Created various LXC containers, KVM virtual machines.</li>
                                    <li>Migrated Windows machines to Proxmox VM's.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                    <Card cardStyle={styles.card} image={Logos.postman} imageSize={{ x: '64px', y: '64px' }}>
                        <Container containerStyle={styles.cardContainer}>
                            <Header headerType='h3'>Postman</Header>
                            <Collapsible collapseButtonHoverStyle={styles.cardCollapsible.buttonHover}>
                                <></>
                                <List listStyle={styles.cardContentList}>
                                    <li>Used test-driven development approach to design RestAPI endpoints.</li>
                                    <li>Tested CRUD operations to cover any potential edge cases.</li>
                                </List>
                            </Collapsible>
                        </Container>
                    </Card>
                </Grid>
            </PageContent>
        </Container>
    );
}

export default Technologies;
