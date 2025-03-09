import { FC } from "react";
import { Button } from "./ui/Button/Button";
import { Flex } from "./ui/Flex/flex.styles";
import { Sorted, SortedValue } from "../constants/sortedType";

interface TasksSortedProps {
  activeFilter: SortedValue
  setFilter: (filter: SortedValue) => void;
  priorities: Sorted[]
}

export const TasksSorted: FC<TasksSortedProps> = ({ activeFilter, setFilter, priorities }) => {
  return (
    <Flex $justify="flex-start">
      {priorities.map((priority) => (
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
