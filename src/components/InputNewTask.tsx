import React, { FC, useState } from "react";
import { Input } from "./ui/Input/Input";
import { Button } from "./ui/Button/Button";
import { PrioritySelector } from "./PrioritySelector";
import { useAddNewTask } from "../hooks/useAddNewTask";
import { Priority } from "../types/taskTypes";
import { PRIORITY_LEVELS } from "../constants/pryorityLevel";
import { Flex } from "./ui/Flex/flex.styles";
import { Textarea } from "./ui/Textarea/Textarea";

export const InputNewTask: FC = () => {
  const [taskPriority, setTaskPriority] = useState<Priority>("medium");
  const {
    taskName,
    taskDescription,
    handleTaskInputChangeName,
    handleTaskInputChangeDescription,
    addTask,
    handleTaskKeyDown
  } = useAddNewTask(taskPriority)

  return (
    <>
      <Flex $direction="column">
        <Input
          type="text"
          value={taskName}
          placeholder="Введите название задачи..."
          onChange={handleTaskInputChangeName}
          onKeyDown={handleTaskKeyDown}
        />
        <Textarea
          value={taskDescription}
          placeholder="Введите описание задачи..."
          onChange={handleTaskInputChangeDescription}
          onKeyDown={handleTaskKeyDown}
        />
      </Flex>
      <Flex $justify="center">
        <PrioritySelector
          value={taskPriority}
          onChange={setTaskPriority}
          levels={PRIORITY_LEVELS}
        />
      </Flex>
      <Button
        onClick={addTask}
        $size="full">
        Добавить задачу
      </Button>
    </>
  )
}
