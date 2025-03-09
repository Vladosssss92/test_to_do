import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { updateTask } from "../store/slices/taskSlice";

export const useManageTasks = () => {
    const [inputTaskName, setInputTaskName] = useState('');
    const [inputTaskDescription, setInputTaskDescription] = useState('');

    const allTasks = useAppSelector((state) => state.tasks.newTask)
    const dispatch = useAppDispatch()

    const inputEditTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTaskName(e.target.value);
    }
    const inputEditTaskDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputTaskDescription(e.target.value);
    }

    const deleteTask = (id: string) => {
        const updatedArray = allTasks.filter((element) => element.id !== id)
        dispatch(updateTask(updatedArray))
    }

    const editTask = (id: string) => {
        const currentTask = allTasks.find((task) => task.id === id)
        setInputTaskName(currentTask ? currentTask.taskName : '');
        setInputTaskDescription(currentTask ? currentTask.taskDescription : '')
        const updatedArray = allTasks.map((element) => {
            if (element.id === id) {
                return { ...element, editTask: true }
            } else {
                return { ...element, editTask: false }
            }
        })
        dispatch(updateTask(updatedArray))
    }

    const toggleTaskStatus = (id: string) => {
        const updatedArray = allTasks.map((element) => {
            if (element.id === id && element.completed) {
                return { ...element, completed: false }
            }
            if (element.id === id && !element.completed) {
                return { ...element, completed: true }
            }
            return element
        })
        dispatch(updateTask(updatedArray))
    }

    const saveTaskChanges = (id: string) => {
        const updatedArray = allTasks.map((element) => {
            if ((element.id === id && element.taskName !== inputTaskName && inputTaskName.trim())) {
                return { ...element, editTask: false, taskName: inputTaskName, completed: false, taskDescription: inputTaskDescription }
            }
            if ((element.id === id && element.taskDescription !== inputTaskDescription && inputTaskDescription.trim())) {
                return { ...element, editTask: false, taskDescription: inputTaskDescription, completed: false }
            }
            if ((element.id === id && !inputTaskName.trim() && !inputTaskDescription.trim()) || element.id === id) {
                return { ...element, editTask: false }
            }
            return element
        })
        dispatch(updateTask(updatedArray))
    }

    const cancelEditingTask = (id: string) => {
        const updatedArray = allTasks.map((element) => {
            if (element.id === id) {
                return { ...element, editTask: false }
            }
            return element
        })
        dispatch(updateTask(updatedArray))
    }

    return {
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
    }
}