import { useState, useEffect, useRef } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Button } from "./Button";
import { FontIcon } from "./FontIcon";

type ChildType = React.ReactNode;
type PropTypes = {
    children: [ChildType, ChildType];
    className?: string;
};

const UnstyledCollapsible = ({ className, children }: PropTypes) => {
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
        <div className={`${className} flex flex-col justify-start items-center gap-1`}>
            <Button onClick={() => setIsOpen(!isOpen)}>
                {children[0]}
                <FontIcon icon={isOpen ? faAngleUp : faAngleDown} />
            </Button>
            <div className='collapsible' style={{ height }}>
                <div ref={ref}>
                    <div className='collapsible-content' style={isOpen ? { display: "flex" } : { display: "none" }}>
                        {children[1]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Collapsible = styled(UnstyledCollapsible)`
    & > .collapsible {
        transition: height 0.2s ease-in-out;
    }
`;
