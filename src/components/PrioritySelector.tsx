import { PriorityLevel } from "../constants/pryorityLevel";
import { Priority } from "../types/taskTypes";
import { Checkbox } from "./ui/Checkbox/Checkbox";

interface PrioritySelectorProps {
    value: Priority;
    onChange: (value: Priority) => void;
    levels: PriorityLevel[]
}

export const PrioritySelector = ({ value, onChange, levels }: PrioritySelectorProps) => {
    return (
        <>
            {levels.map((levels) => (
                <Checkbox
                    key={levels.value}
                    type='radio'
                    id={levels.value}
                    text={levels.label}
                    checked={value === levels.value}
                    onChange={() => onChange(levels.value)}
                />
            ))}
        </>
    );
};


