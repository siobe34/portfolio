import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { forwardRef, useState, useImperativeHandle } from 'react';
import { Button } from './Button';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    modalStyle?: React.CSSProperties;
};

const UnstyledModal = forwardRef(({ className, children }: PropTypes, ref) => {
    const [modalState, setModalState] = useState<boolean>(false);
    useImperativeHandle(ref, () => ({
        handleModalState() {
            setModalState(true);
        },
    }));
    if (!modalState) return null;
    return (
        <div className={className}>
            <div className='modal-content'>
                <Button className='modal-close' onButtonClick={() => setModalState(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </Button>
                {children}
            </div>
        </div>
    );
});

export const Modal = styled(UnstyledModal)`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.85);

    & .modal-content {
        display: ${(props) => props.modalStyle?.display ?? 'flex'};
        flex-direction: ${(props) => props.modalStyle?.flexDirection ?? 'column'};
        justify-content: ${(props) => props.modalStyle?.justifyContent ?? 'flex-start'};
        align-items: ${(props) => props.modalStyle?.alignItems ?? 'center'};
        padding: ${(props) => props.modalStyle?.padding ?? '1rem'};
        margin: ${(props) => props.modalStyle?.margin ?? '0'};
        width: ${(props) => props.modalStyle?.width ?? '60vw'};
        height: ${(props) => props.modalStyle?.height ?? '60vh'};
        overflow: ${(props) => props.modalStyle?.overflow ?? 'auto'};
        background-color: ${(props) => props.modalStyle?.backgroundColor ?? 'var(--bg-colour)'};
        border-radius: ${(props) => props.modalStyle?.borderRadius ?? '.35rem'};
    }

    & .modal-close {
        align-self: end;
    }

    /* Mobile Styles */
    @media all and (max-width: 720px) {
        .modal-content {
            width: fit-content;
            height: revert;
        }
    }
`;
