import { TextareaS } from "./Textarea.styles"

interface TextareatProps {
    value: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void
}

export const Textarea = ({ value, placeholder, onChange, onKeyDown }: TextareatProps) => (
        <TextareaS
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )