import { Content } from '../components/Content';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import javascriptLogo from '../assets/javascript.svg';
import typescriptLogo from '../assets/typescript.svg';
import pythonLogo from '../assets/python.svg';

function Technologies() {
    return (
        <Content className="content">
            <Header headerType='h1'>Technical Skills</Header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                <Header headerType='h3'>Front End</Header>
                <List>
                    <Card image={javascriptLogo} imageSize={{x:'32px', y:'32px'}}>
                        <div>
                            <Header headerType='h3'>JavaScript</Header>
                            <ul>
                                <li>React</li>
                                <li>Styled Components</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>
                            </ul>
                        </div>
                    </Card>
                    <Card image={typescriptLogo} imageSize={{x:'32px', y:'32px'}}>
                        <Header headerType='h3'>TypeScript</Header>
                    </Card>
                </List>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black'}}>
                <Header headerType='h3'>Back End</Header>
                <List>
                    <Card image={javascriptLogo} imageSize={{x:'32px', y:'32px'}}>
                        <div>
                            <Header headerType='h3'>JavaScript</Header>
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                            </ul>
                        </div>
                    </Card>
                    <Card image={pythonLogo} imageSize={{x:'32px', y:'32px'}}>
                        <div>
                            <Header headerType='h3'>Python</Header>
                            <ul>
                                <li>Flask</li>
                                <li>SQLAlchemy</li>
                                <li>Pandas</li>
                            </ul>
                        </div>
                    </Card>
                </List>
            </div>




            <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Mariadb</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Docker</li>
                <li>Proxmox</li>
                <li>Debian</li>
                <li>Ubuntu</li>
                <li>Portainer</li>
                <li>PowerBI</li>
                <li>RestAPI Design</li>
                <li>Relational Database Design</li>
                <li>Selenium</li>
                <li>Google Maps JS API</li>
                <li>TCP/IP</li>
                <li>Postman</li>
            </ul>
        </Content>
    );
}

export default Technologies;
