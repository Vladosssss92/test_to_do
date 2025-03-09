import { styled } from "styled-components";

interface ParagraphProps {
    $checked?: boolean
}

export const Paragraph = styled.p<ParagraphProps>`
    font-size: 1em;
    padding: 5px;
    text-decoration: ${({ $checked }) => $checked ? 'line-through' : 'none'};
    color: ${({ $checked }) => $checked ? 'gray' : '#d0d0d0'};
    white-space: pre-wrap; 
    word-wrap: break-word; 
`