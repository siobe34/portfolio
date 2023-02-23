import { LinkButton } from "../components/LinkButton";
import { Card } from "../components/Card";

const brandButtonClass = "inline-flex justify-center items-center m-0 py-2 px-4 border-0 rounded cursor-default hover:opacity-80";

const brandButtons: { [key: string]: { name: string; color: string; backgroundColor: string } } = {
    javascript: {
        name: "JavaScript",
        color: "#000",
        backgroundColor: "#f7e018",
    },
    typescript: {
        name: "TypeScript",
        color: "#fff",
        backgroundColor: "#2d79c7",
    },
    react: {
        name: "React",
        color: "#000",
        backgroundColor: "#61dafb",
    },
    nextjs: {
        name: "Next JS",
        color: "#fff",
        backgroundColor: "#000",
    },
    nodejs: {
        name: "Node JS",
        color: "#000",
        backgroundColor: "#68a063",
    },
    mongodb: {
        name: "MongoDB",
        color: "#000",
        backgroundColor: "#449945",
    },
    nginx: {
        name: "NGINX",
        color: "#000",
        backgroundColor: "#01992b",
    },
    aws: {
        name: "AWS",
        color: "#000",
        backgroundColor: "#ff7e00",
    },
    python: {
        name: "Python",
        color: "#fff",
        backgroundColor: "#414bb2",
    },
    flask: {
        name: "Flask",
        color: "#fff",
        backgroundColor: "#414bb2",
    },
    mysql: {
        name: "MySQL",
        color: "#000",
        backgroundColor: "#f0902d",
    },
    mariadb: {
        name: "MariaDB",
        color: "#fff",
        backgroundColor: "#8a4810",
    },
    github: {
        name: "GitHub Pages",
        color: "#fff",
        backgroundColor: "#000",
    },
    tailwind: {
        name: "Tailwind CSS",
        color: "#000",
        backgroundColor: "#38bdf8",
    },
    chessjs: {
        name: "Chess.js",
        color: "#fff",
        backgroundColor: "#009981",
    },
    styled: {
        name: "Styled Components",
        color: "#fff",
        backgroundColor: "#ff69b4",
    },
    google: {
        name: "Google Maps",
        color: "#fff",
        backgroundColor: "#00b757",
    },
    reactrouter: {
        name: "React Router",
        color: "#fff",
        backgroundColor: "#ff0000",
    },
    vercel: {
        name: "Vercel",
        color: "#fff",
        backgroundColor: "#000",
    },
};

const ledger = ["javascript", "typescript", "react", "nextjs", "tailwind", "mongodb", "vercel"];
const landmarks = ["javascript", "typescript", "react", "nextjs", "mongodb", "tailwind", "google", "vercel"];
const tenkchess = ["javascript", "typescript", "react", "tailwind", "chessjs", "vercel"];
const portfolio = ["javascript", "typescript", "react", "styled", "reactrouter", "vercel"];

function Projects() {
    return (
        <>
            <h1 className='mt-8'>Projects</h1>
            <span className='p-4 m-16 rounded border'>
                <h5>Below are notable projects I've worked on along with demonstrations and respective development tools.</h5>
            </span>
            <div className='flex flex-col gap-8 w-4/5 mb-8'>
                <Card className='flex-col gap-4 p-16'>
                    <h3 className='underline leading-loose'>Ledger</h3>
                    <p className='leading-relaxed'>
                        A tool to manage your budget on a transactional level with helpful charts to see historical net worth, monthly categorical
                        spending, and search personal transactions with a user-friendly interface.
                    </p>
                    <LinkButton className='text-xl font-bold' href='https://ledgerr.vercel.app/auth' external>
                        View the demo
                    </LinkButton>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {ledger.map((brand) => {
                            return (
                                <button
                                    key={brand}
                                    className={brandButtonClass}
                                    style={{ color: brandButtons[brand].color, backgroundColor: brandButtons[brand].backgroundColor }}
                                >
                                    {brandButtons[brand].name}
                                </button>
                            );
                        })}
                    </div>
                </Card>
                <Card className='flex-col gap-4 p-16'>
                    <h3 className='underline leading-loose'>Landmarks</h3>
                    <p className='leading-relaxed'>
                        Landmarks is a world map of various points of interest with a brief description about each landmark. It's an interactive way
                        to learn about interesting geography, weird archeological facts, random history, and anything I find interesting.
                    </p>
                    <LinkButton className='text-xl font-bold' href='https://landmarkss.vercel.app' external>
                        Check out the map
                    </LinkButton>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {landmarks.map((brand) => {
                            return (
                                <button
                                    key={brand}
                                    className={brandButtonClass}
                                    style={{ color: brandButtons[brand].color, backgroundColor: brandButtons[brand].backgroundColor }}
                                >
                                    {brandButtons[brand].name}
                                </button>
                            );
                        })}
                    </div>
                </Card>
                <Card className='flex-col gap-4 p-16'>
                    <h3 className='underline leading-loose'>10K Chess</h3>
                    <p className='leading-relaxed'>
                        Practice chess puzzles taken from the public Lichess API. The idea is that memorizing positions from games played by humans
                        improves intuition in your own games.
                    </p>
                    <LinkButton className='text-xl font-bold' href='https://10kchess.vercel.app' external>
                        Try it out
                    </LinkButton>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {tenkchess.map((brand) => {
                            return (
                                <button
                                    key={brand}
                                    className={brandButtonClass}
                                    style={{ color: brandButtons[brand].color, backgroundColor: brandButtons[brand].backgroundColor }}
                                >
                                    {brandButtons[brand].name}
                                </button>
                            );
                        })}
                    </div>
                </Card>

                <Card className='flex-col gap-4 p-16'>
                    <h3 className='underline leading-loose'>Portfolio Website</h3>
                    <LinkButton className='text-xl font-bold' href='https://github.com/siobe34/portfolio' external>
                        View the source code
                    </LinkButton>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {portfolio.map((brand) => {
                            return (
                                <button
                                    key={brand}
                                    className={brandButtonClass}
                                    style={{ color: brandButtons[brand].color, backgroundColor: brandButtons[brand].backgroundColor }}
                                >
                                    {brandButtons[brand].name}
                                </button>
                            );
                        })}
                    </div>
                </Card>
            </div>
        </>
    );
}

export default Projects;
