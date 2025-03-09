import React, { FC } from "react";
import { Input } from "./ui/Input/Input";
import { Button } from "./ui/Button/Button";
import { List } from "./ui/List/Li.styles";
import { useManageTasks } from "../hooks/useManageTasks";
import { Checkbox } from "./ui/Checkbox/Checkbox";
import { handleTaskKeyboard } from "../helpers/handleTaskKeyboard";
import { Flex } from "./ui/Flex/flex.styles";
import { SORTED_TYPE } from "../constants/sortedType";
import { Paragraph } from "./ui/Paragraph/P.styles";
import { Textarea } from "./ui/Textarea/Textarea";
import { TasksSorted } from "./TasksSorted";
import { PRIORITY_LEVELS } from "../constants/pryorityLevel";
import { TasksFilter } from "./TasksFilter";
import { useSortedTasks } from "../hooks/useSortedTasks";
import { useFilterTasks } from "../hooks/useFilterTasks";

export const TasksList: FC = () => {
  const {
    allTasks,
    inputTaskName,
    inputTaskDescription,
    inputEditTaskDescription,
    inputEditTaskName,
    deleteTask,
    editTask,
    toggleTaskStatus,
    saveTaskChanges,
    cancelEditingTask,
  } = useManageTasks()

  const {
    formattedTaskArray,
    setSorted,
    sorted
  } = useSortedTasks(allTasks)

  const {
    filteredTaskArray,
    setFilter,
    filter
  } = useFilterTasks(formattedTaskArray)

  const tasksList = filter === 'all' ? formattedTaskArray : filteredTaskArray

  return (
    <>
      <ul>
        <TasksSorted
          activeFilter={sorted}
          setFilter={setSorted}
          priorities={SORTED_TYPE}
        />
        <TasksFilter
          activeFilter={filter}
          setFilter={setFilter}
          values={PRIORITY_LEVELS}
        />
        {tasksList.map((element) =>
          element.editTask ? (
            <List key={element.id}>
              <label>
                Название задачи:
                <Input
                  $size="s"
                  type='text'
                  value={inputTaskName}
                  onChange={inputEditTaskName}
                  onKeyDown={(e) => handleTaskKeyboard(e, element.id, saveTaskChanges, cancelEditingTask)}
                />
              </label>
              <label>
                Описание задачи:
                <Textarea
                  value={inputTaskDescription}
                  onChange={inputEditTaskDescription}
                  onKeyDown={(e) => handleTaskKeyboard(e, element.id, saveTaskChanges, cancelEditingTask)}
                />
              </label>
              <Flex>
                <Button onClick={() => cancelEditingTask(element.id)}>
                  Отменить
                </Button>
                <Button onClick={() => saveTaskChanges(element.id)}>
                  Сохранить
                </Button>
              </Flex>
            </List>
          ) : (
            <List key={element.id}>
              <Checkbox
                type='checkbox'
                id={element.id}
                text={`${element.taskName} [${element.priority}]`}
                checked={element.completed}
                onChange={() => toggleTaskStatus(element.id)}
                key={element.id}
                $priority={element.priority}
              />
              <Paragraph $checked={element.completed}>
                {element.taskDescription}
              </Paragraph>
              <Flex>
                <Button onClick={() => editTask(element.id)}>
                  Изменить
                </Button>
                <Button onClick={() => deleteTask(element.id)}>
                  Удалить
                </Button>
              </Flex>
            </List>
          )
        )}
      </ul>
    </>
  )
}
