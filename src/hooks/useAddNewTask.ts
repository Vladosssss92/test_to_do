import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from "../store/hooks/hooks";
import { ITask, Priority } from "../types/taskTypes";
import { addNewTask } from "../store/slices/taskSlice";


export const useAddNewTask = (priority?: Priority) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const dispatch = useAppDispatch()

    const handleTaskInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value)
    }
    const handleTaskInputChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDescription(e.target.value)
    }

    const newTask = {
        id: uuidv4(),
        taskName: taskName,
        taskDescription: taskDescription,
        completed: false,
        editTask: false,
        priority: priority ? priority : 'medium',
        date: new Date().toISOString(),
    }

    const addTask = () => {
        if (!taskName.trim() || !taskDescription.trim()) {
            setTaskName('')
            setTaskDescription('')
        } else {
            dispatch(addNewTask(newTask));
            setTaskName('')
            setTaskDescription('')
        }
    }

    const addMockTask = (mockTask: ITask) => {
        dispatch(addNewTask(mockTask));
    }

    const handleTaskKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter' && e.target instanceof HTMLTextAreaElement) {
            return;
        }
        if (e.key === 'Enter' && (!taskName.trim() || !taskDescription.trim())) {
            setTaskName('')
            setTaskDescription('')
        } else if (e.key === 'Enter') {
            dispatch(addNewTask(newTask));
            setTaskName('')
            setTaskDescription('')
        }
        if (e.key === 'Escape') {
            setTaskName('')
            setTaskDescription('')
        }
    }

    return {
        taskName,
        taskDescription,
        handleTaskInputChangeName,
        handleTaskInputChangeDescription,
        addTask,
        handleTaskKeyDown,
        addMockTask
    }
}