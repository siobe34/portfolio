import styled from 'styled-components';

type PropTypes = {
    children: React.ReactNode;
    className?: string;
    gridStyle?: React.CSSProperties;
    childFlex?: string;
};

const UnstyledGrid = ({ className, children, gridStyle }: PropTypes) => {
    return (
        <div className={className} style={gridStyle}>
            {children}
        </div>
    );
};

export const Grid = styled(UnstyledGrid)`
    display: flex;
    justify-content: ${(props) => props.gridStyle?.justifyContent ?? 'center'};
    flex-wrap: ${(props) => props.gridStyle?.flexWrap ?? 'wrap'};
    gap: ${(props) => props.gridStyle?.gap ?? '1rem'};
    width: ${(props) => props.gridStyle?.width ?? '100%'};

    & > * {
        flex: ${(props) => props.childFlex ?? '1 0 max(20vw, 720px/3)'};
    }
`;
