import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { FontIcon } from "../components/FontIcon";

import imgAbout from "../assets/aboutme.svg";
import imgProjects from "../assets/projects.svg";
import imgTech from "../assets/techstack.svg";
import imgResume from "../assets/resume.svg";

function Home() {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h2>Ibad Rashid</h2>
                <h4 className='font-medium'>Ryerson University</h4>
                <h6 className='font-semibold'>BEng</h6>
            </div>
            <Grid className='gap-8 w-3/5 my-4'>
                <Card className='flex-col gap-8 p-8' image={imgProjects} imageSize={{ x: "180px", y: "180px" }}>
                    <Button className='text-xl gap-3' href='/projects'>
                        Projects I've worked on <FontIcon icon={faLongArrowRight} />
                    </Button>
                </Card>
                <Card className='flex-col gap-8 p-8' image={imgAbout} imageSize={{ x: "180px", y: "180px" }}>
                    <Button className='text-xl gap-3' href='/about-me'>
                        Read about me <FontIcon icon={faLongArrowRight} />
                    </Button>
                </Card>
                <Card className='flex-col gap-8 p-8' image={imgTech} imageSize={{ x: "180px", y: "180px" }}>
                    <Button className='text-xl gap-3' href='/technical-skills'>
                        Tech stacks I'm familiar with <FontIcon icon={faLongArrowRight} />
                    </Button>
                </Card>
                <Card className='flex-col gap-8 p-8' image={imgResume} imageSize={{ x: "180px", y: "180px" }}>
                    <Button className='text-xl gap-3' href='/resume'>
                        See a traditional Resume <FontIcon icon={faLongArrowRight} />
                    </Button>
                </Card>
            </Grid>
        </>
    );
}

export default Home;
