import styled from "styled-components";

interface FlexProps {
    $justify?: 'space-evenly' | 'flex-start' | "space-around" | 'space-between' | 'center'
    $direction?: 'column' | 'row'
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    gap: 10px;
    margin: ${({ $justify }) => $justify === 'flex-start' ? 'none' : '10px'};
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: ${({ $justify }) => $justify};
    flex-direction: ${({ $direction }) => $direction};;
`