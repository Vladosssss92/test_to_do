import { styled } from "styled-components";

export const TextareaS = styled.textarea`
    height: 150px;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border-radius: 10px;
    border: 2px solid #35a9b3;
    color:gray;
    font-size: 16px;
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