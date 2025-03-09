import { TitleS } from "./Tytle.styles"

interface TitleProps {
    children: string
}

export const Title = ({ children }: TitleProps) => (
    <TitleS>
        {children}
    </TitleS>
)
