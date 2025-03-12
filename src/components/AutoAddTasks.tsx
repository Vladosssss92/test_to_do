import { v4 as uuidv4 } from 'uuid';
import { Button } from "./ui/Button/Button";
import { useAddNewTask } from '../hooks/useAddNewTask';
import { useEffect, useState } from 'react';
import { mocksTasks } from '../mocks/mocksTasks';

const getRandomInterval = () => Math.floor(Math.random() * (20000 - 10000) + 10000);

export const AutoAddTasks = () => {
    const [index, setIndex] = useState(0);
    const [autoAddTask, setAutoAddTask] = useState(false);
    const { addMockTask } = useAddNewTask({ autoAddTask })

    const handleActivityAddTasks = () => {
        setAutoAddTask(prev => !prev)
    }

    useEffect(() => {
        if (index >= mocksTasks.length) return;
        const timeoutId = setTimeout(() => {
            const task = mocksTasks[index];
            task.id = uuidv4()
            addMockTask(task);
            setIndex((prev) => prev + 1);
        }, getRandomInterval());
        return () => clearTimeout(timeoutId);
    }, [addMockTask, index]);

    return (
        <Button
            $size="full"
            onClick={handleActivityAddTasks}
        >
            {autoAddTask ? 'Остановить добавление задач' : 'Возобновить добавление задач'}
        </Button>
    )
}