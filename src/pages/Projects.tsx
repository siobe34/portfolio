import { Button } from "../components/Button";
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
    vercel: {
        name: "Vercel",
        color: "#fff",
        backgroundColor: "#000",
    },
};

const ledger = ["javascript", "typescript", "react", "nodejs", "mongodb", "nginx", "aws"];
const fibreManagement = ["javascript", "typescript", "react", "python", "flask", "mysql", "mariadb", "nginx"];
const tenkchess = ["javascript", "typescript", "react", "tailwind", "chessjs", "vercel"];
const portfolio = ["javascript", "typescript", "react", "vercel"];

function Projects() {
    return (
        <>
            <h1 className='mt-8'>Projects</h1>
            <span className='p-4 m-16 rounded border'>
                <h5>Below are notable projects I've worked on along with demonstrations and respective development tools.</h5>
            </span>
            <div className='flex flex-col gap-8 w-4/5 mb-8'>
                <Card className='flex-col gap-4 p-16'>
                    <h3 className='underline leading-loose'>10K Chess</h3>
                    <p className='leading-relaxed'>A tool to practice chess puzzles taken from the public Lichess API.</p>
                    <Button className='text-xl font-bold'>
                        <a href='https://10kchess.vercel.app/'>Try it out</a>
                    </Button>
                    <div className='flex flex-wrap gap-2'>
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
                    <h3 className='underline leading-loose'>Ledger</h3>
                    <p className='leading-relaxed'>
                        A tool to manage your budget on a transactional level with helpful charts to see historical net worth, monthly categorical
                        spending, and search personal transactions with a user-friendly interface.
                    </p>
                    <Button className='text-xl font-bold'>Under Development</Button>
                    <div className='flex flex-wrap gap-2'>
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
                    <h3 className='underline leading-loose'>Fibre Management</h3>
                    <p className='leading-relaxed'>
                        Uses Google Maps JS API to display various relationally linked geospatial entities on a map interface, complete with
                        user-friendly database management, and user management.
                    </p>
                    <Button className='text-xl font-bold'>Under Development</Button>
                    <div className='flex flex-wrap gap-2'>
                        {fibreManagement.map((brand) => {
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
                    <p className='leading-relaxed'>My portfolio/resume for potential employers to gauge my skills as a web developer.</p>
                    <Button className='text-xl font-bold'>
                        <a href='https://github.com/siobe34/portfolio'>View the source code</a>
                    </Button>
                    <div className='flex flex-wrap gap-2'>
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
