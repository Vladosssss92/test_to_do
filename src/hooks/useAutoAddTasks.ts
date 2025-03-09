import { useEffect, useState } from "react";
import { mocksTasks } from "../mocks/mocksTasks";
import { useAddNewTask } from "./useAddNewTask";
import { v4 as uuidv4 } from 'uuid';

const getRandomInterval = () => Math.floor(Math.random() * (20000 - 10000) + 10000);

export const useAutoAddTasks = () => {
    const { addMockTask } = useAddNewTask()
    const [index, setIndex] = useState(0);


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
}