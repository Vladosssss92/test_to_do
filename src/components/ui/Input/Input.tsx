import { InputS } from "./Input.styles"

interface InputProps {
    type: string,
    value: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void
    $size?: 's' | 'm'
}

export const Input = ({ type, value, placeholder, onChange, onKeyDown, $size }: InputProps) => (
    <InputS
        $size={$size}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
)