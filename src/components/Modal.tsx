import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { Button } from './Button';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    height?: string;
    width?: string;
    padding?: string;
}

const UnstyledModal = ({
    className,
    children,
    modalState,
    setModalState
    }: PropTypes) => {
        if (!modalState) {
            return null;
        }
        return (
            <div className={className}>
                <div className='modal-content'>
                    <Button
                        className='modal-close'
                        onButtonClick={() => setModalState(false)}
                    >
                            <FontAwesomeIcon icon={faClose}/>
                    </Button>
                    { children }
                </div>
            </div>
        );
    };

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
    background-color: rgba(0,0,0,0.85);
    
    & .modal-content {
        display: flex;
        flex-direction: ${props => props.flexDirection ?? 'column'};
        justify-content: ${props => props.justifyContent ?? 'flex-start'};
        align-items: ${props => props.alignItems ?? 'center'};
        padding: ${props => props.padding ?? '1rem'};
        width: ${props => props.width ?? '60vw'};
        height: ${props => props.height ?? '60vh'};
        overflow: hidden;
        background-color: var(--bg-colour);
        border-radius: .35rem;
    }
    
    & .modal-close {
        align-self: end;
    }
`