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
                                <ListItem className={listStyle}>Experience with pure React, React Frameworks, and various CSS solutions.</ListItem>
                                <ListItem className={listStyle}>Familiarity with Next.js</ListItem>
                                <ListItem className={listStyle}>Preference for Tailwind CSS</ListItem>
                                <ListItem className={listStyle}>Styled Components</ListItem>
                                <ListItem className={listStyle}>Bootstrap</ListItem>
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
                                <ListItem className={listStyle}>Built restful API's with Flask</ListItem>
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
                                <ListItem className={listStyle}>MySQL</ListItem>
                                <ListItem className={listStyle}>MariaDB</ListItem>
                                <ListItem className={listStyle}>MongoDB</ListItem>
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
                                <ListItem className={listStyle}>Deployed with Portainer using Docker.</ListItem>
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
            </Grid>
        </>
    );
}

export default Technologies;
