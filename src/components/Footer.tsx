import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import styled from 'styled-components';

type PropTypes = {
    className?: string;
}

function UnstyledFooter({ className }: PropTypes) {
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = window.localStorage.getItem('theme');
        if (typeof(storedTheme) !== 'string') return 'dark';
        return storedTheme;
    });
    
    useEffect(() => {
        const root = document.getElementById('root');
        if (!root) return undefined;
        root.className = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme])
    
    return (
        <Container className={`footer ${className}`} justifyContent="space-between">
            <Button>Click Me!</Button>
            <Button onButtonClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </Button>
            <Container className="footer-txt" margin={'0 0.5% 0 0'}>Made with Font Awesome<span style={{marginLeft: '5px'}}>&#10084;</span></Container>
        </Container>
    )
}

export const Footer = styled(UnstyledFooter)`
    background-color: var(--bg-primary);
    
    & > .footer-txt {
        color: var(--bg-primary-txt);
    }
    & > .footer-txt:hover > span {
        color: red;
        cursor: pointer;
    }
`