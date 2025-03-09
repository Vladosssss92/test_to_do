import { styled } from "styled-components";

interface InputProps {
    $size?: 's' | 'm'
}

export const InputS = styled.input<InputProps>`
    font-size: ${({ $size }) => $size === 's' ? '1em' : '1.5em'};
    width: 100%;
    margin-top: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #35a9b3;
    color:gray;
    &:hover {
        box-shadow: 0 0 10px #88b3b8;
        border: 2px solid #21d1c9;
    }
    &:focus {
        outline: none;
        color: #d9d9d9;
        border: 2px solid #51e3dc;
    }
`