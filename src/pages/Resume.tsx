import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Card } from "../components/Card";

const resumeFile = "/Resume_Ibad-Rashid.pdf";
function Resume() {
    // * Func to create anchor tag, set the download prop, and click the anchor tag
    const downloadFile = () => {
        const anchorDownload = document.createElement("a");
        anchorDownload.href = resumeFile;
        anchorDownload.download = resumeFile;
        anchorDownload.click();
    };

    return (
        <>
            <h1 className='my-8'>Resume</h1>
            <Card className='flex-col gap-8 p-16 mb-16'>
                <LinkButton href={resumeFile} external>
                    View in Browser
                </LinkButton>
                <Button onClick={() => downloadFile()}>Download PDF</Button>
            </Card>
        </>
    );
}

export default Resume;
