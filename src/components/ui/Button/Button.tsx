import { ButtonS } from "./Button.styles"

interface ButtonProps {
    children: string,
    onClick: () => void
    disabled?: boolean
    $size?: 'full' | 'default' | 's'
}

export const Button = ({ children, onClick, disabled, $size = 'default' }: ButtonProps) => (
    <ButtonS
        $size={$size}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </ButtonS>
)