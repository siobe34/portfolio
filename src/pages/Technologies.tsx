import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { List } from '../components/List';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';
import { Collapsible } from '../components/Collapsible';
import Logos from '../components/Logos';

function Technologies() {
    return (
        <Container className="content" flexDirection="column" alignItems="center" gap="2rem" overflow="auto">
            <Header headerType='h1'>Technical Skills</Header>
            <div style={{ width: '65vw'}}>
                <Grid>
                    <Card flexDirection='column'>
                        <Header headerType='h3'>Project #1</Header>
                        <p>Project description. Blah blah blah. Lorem ipsum dolor sit amet. Dummy text. Lorem ipsum dolor.</p>
                        <Container flexWrap='wrap' gap='.5rem'>
                            <Button backgroundColor='#f7e018' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>JavaScript</Button>
                            <Button backgroundColor='#2d79c7' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>TypeScript</Button>
                            <Button backgroundColor='#000' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>GitHub Pages</Button>
                            <Button backgroundColor='#61dafb' color='#000' hoverColor='#000' hoverOpacity='.5' cursor='auto'>React</Button>
                            <Button backgroundColor='#68a063' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>NodeJS</Button>
                            <Button backgroundColor='#449945' color='#fff' hoverColor='#fff' hoverOpacity='.5' cursor='auto'>MongoDB</Button>
                        </Container>
                    </Card>
                    <Card>Test</Card>
                </Grid>
            </div>
        </Container>
    );
}

export default Technologies;






// <div style={{ width: '65vw'}}>
//                 <Grid>
//                     <Card
//                         cardType='square'
//                         image={Logos.javascript}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>JavaScript</Header>
//                             <Grid>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.react}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h4'>React</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.reactrouter}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h4'>React Router</Header>
//                                 </Card>
//                                 <Card 
//                                     cardType='square'
//                                     image={Logos.styledcomponents}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h4'>React Styled Components</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.bootstrap}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h4'>Bootstrap</Header>
//                                 </Card>
//                                 <Card 
//                                     cardType='square'
//                                     image={Logos.jquery}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h4'>JQuery</Header>
//                                 </Card>
//                             </Grid>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.typescript}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>TypeScript</Header>
//                             <List listStyle='circle'>
//                                 <li>Transitioned to TypeScript after developing understanding of vanilla JavaScript.</li>
//                                 <li>Fell in love with static types because it makes test-driven development so much easier!</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.HTML}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>HTML5</Header>
//                             <List listStyle='circle'>
//                                 <li>Began self-taught web development journey learning vanilla HTML/CSS/JS to establish basic understanding.</li>
//                                 <li>Progressed to learning web template frameworks such as Jinja2.</li>
//                                 <li>After establishing basic understanding, developed personal projects using web development frameworks such as React.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.CSS} 
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>CSS3</Header>
//                             <List listStyle='circle'>
//                                 <li>Developed simple applications with vanilla CSS establishing understanding of basic concepts.</li>
//                                 <li>Re-factored to use CSS frameworks like Styled Components.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.database}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Databases</Header>
//                             <Grid>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.mysql}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>MySQL</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.mariadb}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>MariaDB</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.mongodb}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>MongoDB</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.sqlite}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>SQLite</Header>
//                                 </Card>
//                             </Grid>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.javascript}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>JavaScript</Header>
//                             <Grid>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.nodejs}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>NodeJS</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.express}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>Node Express</Header>
//                                 </Card>
//                             </Grid>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.python}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Python</Header>
//                             <Grid>
//                                 <Card>
//                                     <Collapsible>
//                                         <img src={Logos.flask} alt='flask' style={{width:'32px', height:'32px'}}/>
//                                         <List listStyle='circle'>
//                                             <li>testing</li>
//                                         </List>
//                                     </Collapsible>
//                                 </Card>
//                                 <Card>
//                                     <Collapsible>
//                                         <img src={Logos.pandas} alt='pandas' style={{width:'32px', height:'32px'}}/>
//                                         <List listStyle='circle'>
//                                             <li>testing</li>
//                                         </List>
//                                     </Collapsible>
//                                 </Card>
//                                 <Card>
//                                     <Collapsible>
//                                         <img src={Logos.sqlalchemy} alt='sql alchemy' style={{width:'150px', height:'32px'}}/>
//                                         <List listStyle='circle'>
//                                             <li>testing</li>
//                                         </List>
//                                     </Collapsible>
//                                 </Card>
//                                 {/* <Card
//                                     cardType='square'
//                                     image={Logos.flask}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>Flask</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.sqlalchemy}
//                                     imageSize={{x:'150px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>SQL Alchemy</Header>
//                                 </Card>
//                                 <Card
//                                     cardType='square'
//                                     image={Logos.pandas}
//                                     imageSize={{x:'32px', y:'32px'}}
//                                 >
//                                     <Header headerType='h3'>Pandas</Header>
//                                 </Card> */}
//                             </Grid>
//                         </Collapsible>
//                     </Card>

//                     {/* {miscellaneous cards} */}
//                     <Card 
//                         cardType='square'
//                         image={Logos.restAPI}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Rest API Design</Header>
//                             <List listStyle='circle'>
//                                 <li>Designed endpoints adhering to RestAPI best practices.</li>
//                                 <li>Used test-driven development approach to develop endpoints with standard HTTP response codes.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.github}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>GitHub</Header>
//                             <List listStyle='circle'>
//                                 <li>Used Git for version control of personal projects.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.docker}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Header headerType='h3'>Docker</Header>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.proxmox}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Proxmox</Header>
//                             <List listStyle='circle'>
//                                 <li>Type 1 Hypervisor used in homelab environment.</li>
//                                 <li>Created various LXC containers, KVM virtual machines.</li>
//                                 <li>Migrated Windows machines to Proxmox VM's.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.debian}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Header headerType='h3'>Debian</Header>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.ubuntu}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Header headerType='h3'>Ubuntu</Header>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.powerBI}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Power BI</Header>
//                             <List listStyle='circle'>
//                                 <li>Compiled data for Travel Time routes across the GTA to show in a user-friendly interface.</li>
//                                 <li>Implemented interactive elements to filter various Travel Time routes and respective ITS sensors.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card 
//                         image={Logos.selenium}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Selenium</Header>
//                             <List listStyle='circle'>
//                                 <li>Evaluated accuracy of automated Intelligent Transportation Systems (ITS) using Selenium.</li>
//                                 <li>Automated process to compile Travel Times from ON511.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.traefik}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Traefik</Header>
//                             <List listStyle='circle'>
//                                 <li>Reverse proxy for various open-source services in homelab environment.</li>
//                                 <li>Protected with TLS/SSL certificates.</li>
//                                 <li>Configured personal wildcard domain to host internal services.</li>
//                                 <li>Spun up with Portainer using Docker containers.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card
//                         cardType='square'
//                         image={Logos.portainer}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Portainer</Header>
//                             <List listStyle='circle'>
//                                 <li>Managed container stacks in a homelab environment.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.googlemaps}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Google Maps JS API</Header>
//                             <List listStyle='circle'>
//                                 <li>Developed mobile-friendly web application to view various geospatial assets.</li>
//                                 <li>Leveraged Google Maps JS API to create custom components to represent various geospatial assets.</li>
//                                 <li>Designed relational database to seamlessly connect different types of geospatial assets.</li>
//                                 <li>Implemented responsive UI to manage the database of geospatial assets.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                     <Card 
//                         cardType='square'
//                         image={Logos.postman}
//                         imageSize={{x:'32px', y:'32px'}}
//                     >
//                         <Collapsible>
//                             <Header headerType='h3'>Postman</Header>
//                             <List listStyle='circle'>
//                                 <li>Used test-driven development approach to design RestAPI endpoints.</li>
//                                 <li>Nowadays I find myself reaching for built-in VSCode extensions more often than Postman.</li>
//                             </List>
//                         </Collapsible>
//                     </Card>
//                 </Grid>
//             </div>