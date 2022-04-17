import styled from 'styled-components';
import { motion } from 'framer-motion';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    containerStyle?: React.CSSProperties;
    animate?: boolean;
};

const UnstyledContainer = ({ className, children, animate }: PropTypes) => {
    if (animate) {
        return (
            <motion.div className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {children}
            </motion.div>
        );
    }
    return <div className={className}>{children}</div>;
};

export const Container = styled(UnstyledContainer)`
    display: flex;
    flex-wrap: ${(props) => props.containerStyle?.flexWrap ?? 'nowrap'};
    flex-direction: ${(props) => props.containerStyle?.flexDirection ?? 'row'};
    justify-content: ${(props) => props.containerStyle?.justifyContent ?? 'flex-start'};
    align-items: ${(props) => props.containerStyle?.alignItems ?? 'center'};
    align-self: ${(props) => props.containerStyle?.alignSelf ?? 'revert'};
    gap: ${(props) => props.containerStyle?.gap ?? '0'};
    margin: ${(props) => props.containerStyle?.margin ?? '0'};
    padding: ${(props) => props.containerStyle?.padding ?? '0'};
    width: ${(props) => props.containerStyle?.width ?? 'auto'};
    height: ${(props) => props.containerStyle?.height ?? 'auto'};
    overflow: ${(props) => props.containerStyle?.overflow ?? 'hidden'};
    border: ${(props) => props.containerStyle?.border ?? 'none'};
    border-radius: ${(props) => props.containerStyle?.borderRadius ?? 'unset'};
    color: ${(props) => props.containerStyle?.color ?? 'inherit'};
    background-color: ${(props) => props.containerStyle?.backgroundColor ?? 'inherit'};
`;
