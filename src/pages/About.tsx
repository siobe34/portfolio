import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "../components/Button";
import { List, ListItem } from "../components/List";
import { Span } from "../components/Span";

const listStyle = "list-item leading-8 tracking-wider text-xl py-2";

function About() {
    const [TLDR, setTLDR] = useState<boolean>(false);

    return (
        <>
            <h1 className='my-8'>About Me</h1>

            <div className='flex gap-4'>
                {TLDR ? (
                    <Button onClick={() => setTLDR(false)}>
                        <h3>Read in more detail</h3>
                    </Button>
                ) : (
                    <Button onClick={() => setTLDR(true)}>
                        <h3>Bullet point summary</h3>
                    </Button>
                )}
            </div>
            {TLDR ? (
                <motion.div className='flex flex-col align-start my-4 mb-8'>
                    <List className='list-disc leading-8 pl-4'>
                        <ListItem className={listStyle}>
                            Experience with <Span>TypeScript</Span> and <Span>JavaScript</Span>
                        </ListItem>
                        <ListItem className={listStyle}>
                            Built full-stack applications with <Span>React</Span>, <Span>NodeJS</Span>, <Span>Python</Span>, and <Span>MySQL</Span>
                        </ListItem>
                        <ListItem className={listStyle}>
                            Deployed applications in the <Span>Cloud</Span> and in <Span>local intranet environments</Span>
                        </ListItem>
                        <ListItem className={listStyle}>
                            Comfortable in <Span>Linux</Span> and <Span>Windows</Span> environments
                        </ListItem>
                        <ListItem className={listStyle}>
                            Strong understanding of Intelligent Transportation Systems <Span>(ITS)</Span>
                        </ListItem>
                        <ListItem className={listStyle}>
                            Background in physical and logical <Span>Network Design</Span>
                        </ListItem>
                        <ListItem className={listStyle}>
                            Experience with <Span>Pandas</Span> for <Span>Data Analysis</Span>
                        </ListItem>
                        <ListItem className={listStyle}>Analyzed and evaluated automated Traffic Safety Systems</ListItem>
                        <ListItem className={listStyle}>Ability to work independently within the context of a Team</ListItem>
                        <ListItem className={listStyle}>General Project Management experience</ListItem>
                        <ListItem className={listStyle}>
                            Management of version control with <Span>Git</Span>
                        </ListItem>
                        <ListItem className={listStyle}>Knowledge of various DevOps technologies</ListItem>
                        <ListItem className={listStyle}>
                            Understanding of <Span>RestAPI</Span> and <Span>Relational Database</Span> design
                        </ListItem>
                    </List>
                </motion.div>
            ) : (
                <div className='flex flex-col justify-center gap-2 my-8 w-4/5'>
                    <h3 className='align-start py-1'>Tell me about yourself.</h3>
                    <p className='leading-loose'>
                        Hi, my name's Ibad. I'm an engineer with strong work experience in various fields of Intelligent Transportation Systems (ITS).
                        My work with ITS has exposed me to several web applications related to Traffic Management/Safety Systems and that's how I
                        discovered my passion for Web Development. I found myself wanting to be the one who developed the applications I was working
                        with - so I set out on my journey to self-learn programming.
                        <br />
                    </p>
                    <p className='leading-loose'>
                        My programming journey began with learning the basics using Python and making simple websites with vanilla JavaScript, HTML,
                        and CSS. After establishing some fundamentals, I moved onto learning React and basic backend technologies, with a healthy mix
                        of a few Databases. When developing the projects seen in my portfolio, I learned best practices for designing relational
                        databases, Rest API's with CRUD functions, and front-end UI's.
                        <br />
                        <br />
                        Currently, my experience consists of only my personal projects but I believe I've reached a point where my portfolio
                        demonstrates that my knowledge of web development can be an asset to any team.
                        <br />
                        <br />
                    </p>
                    <h3 className='align-start py-1'>What do you do outside of work?</h3>
                    <p className='leading-loose'>
                        Well I love to learn so I'm usually learning something new, lately my time is consumed with learning home automation with Home
                        Assisstant and cheap microprocessors.
                        <br />
                        Otherwise, my lifelong hobbies to date are playing sports badly, reading, messing around with computers, and dreaming about
                        being good at pretty much any racquet sport.
                    </p>
                </div>
            )}
        </>
    );
}

export default About;
