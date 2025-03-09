import { useState } from "react";
import { ITask } from "../types/taskTypes";
import { PriorityFilter } from "../constants/pryorityLevel";

export const useFilterTasks = (tasks: ITask[]) => {
    const [filter, setFilter] = useState<PriorityFilter>('all');
        const filteredTaskArray = tasks.filter((task) => filter === task.priority)
    return {
        filteredTaskArray,
        setFilter,
        filter
    }
}