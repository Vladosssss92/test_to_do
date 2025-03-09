import { FC } from "react";
import { Button } from "./ui/Button/Button";
import { Flex } from "./ui/Flex/flex.styles";
import { PriorityFilter, PriorityLevel } from "../constants/pryorityLevel";

interface TasksFilterProps {
    activeFilter: PriorityFilter
    setFilter: (filter: PriorityFilter) => void;
    values: PriorityLevel[]
}

export const TasksFilter: FC<TasksFilterProps> = ({ activeFilter, setFilter, values }) => {
    return (
        <Flex $justify="flex-start">
            <Button
                    key={'all'}
                    $size="s"
                    onClick={() => setFilter('all')}
                    disabled={activeFilter === 'all'}
                >
                    {'Все задачи'}
                </Button>
            {values.map((priority) => (
                <Button
                    key={priority.value}
                    $size="s"
                    onClick={() => setFilter(priority.value)}
                    disabled={activeFilter === priority.value}
                >
                    {priority.label}
                </Button>
            ))}
        </Flex>
    );
};
