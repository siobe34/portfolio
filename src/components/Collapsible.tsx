import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { useState, useEffect, useRef } from 'react';
import { Button } from './Button';

type ChildType = React.ReactNode;
type PropTypes = {
    children: [ChildType, ChildType];
    className?: string;
    collapseStyle?: React.CSSProperties;
    buttonWidth?: string;
    buttonColor?: string;
    buttonBackgroundColor?: string;
    buttonHoverColor?: string;
    buttonHoverOpacity?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    contentWidth?: string;
}

const UnstyledCollapsible = ({
    className,
    children,
    collapseStyle,
    buttonWidth,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverOpacity
    }: PropTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);
    
    useEffect(() => {
        if (!height || !isOpen || !ref.current) return undefined;
        // @ts-ignore
        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [height, isOpen])
    
    useEffect(() => {
        if (!isOpen) setHeight(0);
        else setHeight(ref.current?.getBoundingClientRect().height)
    }, [isOpen])
    
    return (
        <div className={className} style={collapseStyle}>
            <Button
                onButtonClick={() => setIsOpen(!isOpen)}
                flexDirection='column'
                width={`${buttonWidth ?? 'fit-content'}`}
                color={`${buttonColor ?? 'inherit'}`}
                backgroundColor={`${buttonBackgroundColor ?? 'inherit'}`}
                hoverColor={`${buttonHoverColor ?? 'inherit'}`}
                hoverOpacity={`${buttonHoverOpacity ?? '0.5'}`}
            >
                {children[0]}
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown}/>
            </Button>
            <div className="collapsible" style={{ height }}>
                <div ref={ref}>
                    <div className="collapsible-content" style={isOpen ? {display: 'flex'   } : {display: 'none'}}>{children[1]}</div>
                </div>
            </div>
        </div>
    )
}

export const Collapsible = styled(UnstyledCollapsible)`
    display: flex;
    flex-direction: ${props => props.flexDirection ?? 'column'};
    justify-content: ${props => props.justifyContent ?? 'flex-start'};
    align-items: ${props => props.alignItems ?? 'center'};
    gap: ${props => props.gap ?? '.5rem'};
    & > .collapsible {
        transition: height 0.2s ease-in-out;
    }
    
    & > .collapsible-content {
        contentWidth: ${props => props.contentWidth ?? '100%'};
    }
`