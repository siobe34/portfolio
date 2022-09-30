import { Button } from "../components/Button";
import { Card } from "../components/Card";

function Resume() {
    return (
        <>
            <h1 className='my-8'>Resume</h1>
            <Card className='flex-col gap-8 p-16'>
                <Button>Download PDF</Button>
                <h3>Unfortunately the download button doesn't work as of right now.</h3>
            </Card>
        </>
    );
}

export default Resume;
