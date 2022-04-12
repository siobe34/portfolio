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
    collapseButtonStyle?: React.CSSProperties;
    collapseButtonHoverStyle?: React.CSSProperties;
    contentWidth?: string;
};

const UnstyledCollapsible = ({ className, children, collapseStyle, collapseButtonStyle, collapseButtonHoverStyle }: PropTypes) => {
    const ref = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

    useEffect(() => {
        if (!height || !isOpen || !ref.current) return undefined;

        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [height, isOpen]);

    useEffect(() => {
        if (!isOpen) setHeight(0);
        else setHeight(ref.current?.getBoundingClientRect().height);
    }, [isOpen]);

    return (
        <div className={className} style={collapseStyle}>
            <Button onButtonClick={() => setIsOpen(!isOpen)} buttonStyle={collapseButtonStyle} buttonHoverStyle={collapseButtonHoverStyle}>
                {children[0]}
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
            </Button>
            <div className='collapsible' style={{ height }}>
                <div ref={ref}>
                    <div className='collapsible-content' style={isOpen ? { display: 'flex' } : { display: 'none' }}>
                        {children[1]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Collapsible = styled(UnstyledCollapsible)`
    display: flex;
    flex-direction: ${(props) => props.collapseStyle?.flexDirection ?? 'column'};
    justify-content: ${(props) => props.collapseStyle?.justifyContent ?? 'flex-start'};
    align-items: ${(props) => props.collapseStyle?.alignItems ?? 'center'};
    gap: ${(props) => props.collapseStyle?.gap ?? '.5rem'};

    & > .collapsible {
        transition: height 0.2s ease-in-out;
    }

    & > .collapsible-content {
        contentwidth: ${(props) => props.contentWidth ?? '100%'};
    }
`;
