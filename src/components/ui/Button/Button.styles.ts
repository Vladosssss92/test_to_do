import { styled } from "styled-components";

interface ButtonSProps {
    $size: 's' | 'default' | 'full'
}

export const ButtonS = styled.button<ButtonSProps>`
    padding: 6px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #2eb52e;
    font-size: ${({$size}) => {
        if ($size === 'full') return '1.5em'
        if ($size === 's') return '14px'
        return '1em'
        }};
    color: #adadad;
    width: ${({$size}) => $size=== 'full' ? '100%' : 'auto'};
    &:disabled {
    cursor: not-allowed;
    color: gray;
    border: 2px solid #808080;
        &:hover {
            box-shadow: none;
            border: 2px solid #808080;
        }
    }
    &:hover {
    border: 2px solid #25e44b;
    box-shadow: 0 0 10px #88b3b8;
    }
    &:active {
        box-shadow: 0 0 10px 5px #88b3b8;
        border: 2px solid #2dd906df;
        color: #d9d9d9;
    } 
`