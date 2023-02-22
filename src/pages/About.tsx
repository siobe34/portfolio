function About() {
    return (
        <>
            <h1 className='my-8'>About Me</h1>

            <div className='flex flex-col justify-center gap-2 my-8 w-4/5 md:w-3/5'>
                <h3 className='align-start py-1'>Tell me about yourself.</h3>
                <p className='leading-loose'>
                    Hi, my name's Ibad. I'm an engineer with strong work experience in various fields of Intelligent Transportation Systems (ITS). My
                    work with ITS has exposed me to several web applications related to Traffic Management/Safety Systems and that's how I discovered
                    my passion for Web Development. I found myself wanting to be the one who developed the applications I was working with - so I set
                    out on my journey to self-learn programming.
                    <br />
                </p>
                <h3 className='align-start py-1'>What do you do outside of work?</h3>
                <p className='leading-loose'>
                    Well I love to learn so I'm usually learning something new.
                    <br />
                    Otherwise, my hobbies are playing sports badly, reading, messing around with computers, and dreaming about being good at pretty
                    much any racquet sport.
                </p>
            </div>
        </>
    );
}

export default About;
