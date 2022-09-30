import { List, ListItem } from "../components/List";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { Collapsible } from "../components/Collapsible";
import { Logos } from "../components/BrandLogos";

const cardStyle = "flex flex-col gap-1 p-10";
const listStyle = "list-item leading-8 tracking-wider py-2";

function Technologies() {
    return (
        <>
            <h1 className='mt-8'>Technical Skills</h1>
            <Grid className='gap-4 w-4/5 my-8'>
                <Card className={cardStyle} image={Logos.googlemaps} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Google Maps JS API</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>
                                    Developed mobile-friendly web application to view various geospatial assets.
                                </ListItem>
                                <ListItem className={listStyle}>
                                    Leveraged Google Maps JS API to create custom components to represent various geospatial assets.
                                </ListItem>
                                <ListItem className={listStyle}>
                                    Designed relational database to seamlessly connect different types of geospatial assets.
                                </ListItem>
                                <ListItem className={listStyle}>Implemented responsive UI to manage the database of geospatial assets.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.react} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>React</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Started learning JS Frameworks with React.</ListItem>
                                <ListItem className={listStyle}>Currently learning Next.js</ListItem>
                                <ListItem className={listStyle}>Hoping to one day learn React Native.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.typescript} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>TypeScript</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>
                                    Transitioned to TypeScript after developing understanding of vanilla JavaScript.
                                </ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.javascript} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>JavaScript</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>React</ListItem>
                                <ListItem className={listStyle}>React Router</ListItem>
                                <ListItem className={listStyle}>Node Express</ListItem>
                                <ListItem className={listStyle}>Styled Components</ListItem>
                                <ListItem className={listStyle}>Tailwind CSS</ListItem>
                                <ListItem className={listStyle}>Bootstrap</ListItem>
                                <ListItem className={listStyle}>JQuery</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.python} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Python</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Flask</ListItem>
                                <ListItem className={listStyle}>Pandas</ListItem>
                                <ListItem className={listStyle}>SQL Alchemy</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.database} imageSize={{ x: "64px", y: "64px" }} imageClassName='dark:bg-white rounded p-1'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Databases</h3>
                        <Collapsible>
                            <></>

                            <List className='list-disc'>
                                <ListItem className={listStyle}>My SQL</ListItem>
                                <ListItem className={listStyle}>Maria DB</ListItem>
                                <ListItem className={listStyle}>Mongo DB</ListItem>
                                <ListItem className={listStyle}>SQLite</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.restAPI} imageSize={{ x: "64px", y: "64px" }} imageClassName='dark:bg-white rounded p-1'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>RestAPI</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Designed endpoints adhering to RestAPI best practices.</ListItem>
                                <ListItem className={listStyle}>Implemented endpoints with CRUD operations.</ListItem>
                                <ListItem className={listStyle}>
                                    Used test-driven development approach to develop endpoints with standard HTTP response codes.
                                </ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.traefik} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Traefik</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Reverse proxy for various open-source services in homelab environment.</ListItem>
                                <ListItem className={listStyle}>Protected with TLS/SSL certificates.</ListItem>
                                <ListItem className={listStyle}>Configured personal wildcard domain to host internal services.</ListItem>
                                <ListItem className={listStyle}>Spun up with Portainer using Docker.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.proxmox} imageSize={{ x: "64px", y: "64px" }} imageClassName='dark:bg-white rounded p-1'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Proxmox</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Type 1 Hypervisor used in homelab environment.</ListItem>
                                <ListItem className={listStyle}>Created various LXC containers, KVM virtual machines.</ListItem>
                                <ListItem className={listStyle}>Migrated Windows machines to Proxmox VM's.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.nginx} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>NGINX</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Served personal projects with NGINX in local environment.</ListItem>
                                <ListItem className={listStyle}>Deployed web apps on cloud servers with NGINX.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card
                    className={cardStyle}
                    image={Logos.projectmanagement}
                    imageSize={{ x: "64px", y: "64px" }}
                    imageClassName='dark:bg-white rounded p-1'
                >
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Project Management</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Client Correspondence</ListItem>
                                <ListItem className={listStyle}>Technical Writing</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.github} imageSize={{ x: "64px", y: "64px" }} imageClassName='dark:bg-white rounded p-1'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>GitHub</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Used Git for version control of personal projects.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>

                <Card className={cardStyle} image={Logos.HTML} imageSize={{ x: "64px", y: "64px" }} imageClassName='dark:bg-white rounded p-1'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>HTML5</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>
                                    Began self-taught web development journey learning vanilla HTML/CSS/JS to establish basic understanding.
                                </ListItem>
                                <ListItem className={listStyle}>Progressed to learning web template frameworks such as Jinja2.</ListItem>
                                <ListItem className={listStyle}>
                                    After establishing basic understanding, developed personal projects using web development frameworks such as
                                    React.
                                </ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.CSS} imageSize={{ x: "64px", y: "64px" }} imageClassName='dark:bg-white rounded p-1'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>CSS3</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>
                                    Developed simple applications with vanilla CSS establishing understanding of basic concepts.
                                </ListItem>
                                <ListItem className={listStyle}>Re-factored to use CSS frameworks like Styled Components.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.docker} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Docker</h3>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.portainer} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Portainer</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Managed container stacks in a homelab environment.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.ubuntu} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Ubuntu</h3>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.debian} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Debian</h3>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.powerBI} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Power BI</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>
                                    Compiled data for Travel Time routes across the GTA to show in a user-friendly interface.
                                </ListItem>
                                <ListItem className={listStyle}>
                                    Implemented interactive elements to filter various Travel Time routes and respective ITS sensors.
                                </ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.selenium} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Selenium</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>
                                    Evaluated accuracy of automated Intelligent Transportation Systems (ITS) using Selenium.
                                </ListItem>
                                <ListItem className={listStyle}>Automated process to compile Travel Times from ON511.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
                <Card className={cardStyle} image={Logos.postman} imageSize={{ x: "64px", y: "64px" }}>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-center'>Postman</h3>
                        <Collapsible>
                            <></>
                            <List className='list-disc'>
                                <ListItem className={listStyle}>Used test-driven development approach to design RestAPI endpoints.</ListItem>
                                <ListItem className={listStyle}>Tested CRUD operations to cover any potential edge cases.</ListItem>
                            </List>
                        </Collapsible>
                    </div>
                </Card>
            </Grid>
        </>
    );
}

export default Technologies;
