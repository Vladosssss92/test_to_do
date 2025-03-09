import { Priority } from "../../../types/taskTypes"
import { CheckboxContainer } from "./Checkbox.styles"

interface CheckboxProps {
    type: string
    text: string
    id: string
    checked: boolean
    onChange: (id: string) => void
    $priority?: Priority | 'default'
}

export const Checkbox = ({ type, text, id, checked, onChange, $priority = 'default' }: CheckboxProps) => (
    <CheckboxContainer $type={type} $priority={$priority}>
        <input
            type={type}
            id={id}
            checked={checked}
            onChange={() => onChange(id)}
        />
        <label htmlFor={id}>{text}</label>
    </CheckboxContainer>
)
