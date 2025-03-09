import { styled } from "styled-components";
import check from "../image/check.svg";
import { Priority } from "../../../types/taskTypes";

interface CheckboxProps {
    $type: string
    $priority: Priority | 'default'
}

export const CheckboxContainer = styled.div<CheckboxProps>`
    display: flex;
    align-items: center;

label {
    font-size: ${({ $type }) => $type === 'radio' ? '1em' : '1.5em'};
    cursor: pointer;
    display: flex;
    color: #adadad;
    color: ${({ $priority }) => {
        if ($priority === 'low') return "green"
        if ($priority === "medium") return 'yellow'
        if ($priority === 'high') return 'red'
        return '#adadad'
    }
    };
    &:hover{
        &::before {
            box-shadow: 0 0 10px #88b3b8;
            border: 2px solid #21d1c9;
        }
    }
}

input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    width: 1em;
    height: 1em;
}

label::before {
    content: '';
    border: 2px solid #88b3b8;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #000000;
    margin-right: 0.5em;
    flex-shrink: 0;
}

input:checked {
    &+label {
        text-decoration: ${({ $type }) => $type === 'checkbox' ? 'line-through' : 'none'};
        color: #adadad;
    }
    &+label::before {
        content: url(${check});
        background-color: #2eb52e;
    }
}
`