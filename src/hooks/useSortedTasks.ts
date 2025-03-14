import { useState } from "react";
import { ITask } from "../types/taskTypes";
import { SortedValue } from "../constants/sortedType";
import { prioritySorted } from "../constants/pryorityLevel";

export const useSortedTasks = (tasks: ITask[]) => {
    const [sorted, setSorted] = useState<SortedValue>('dateAscending');

    const formattedTaskArray = [...tasks].sort((a, b) => {
        if (sorted === 'priorityAscending') return prioritySorted[a.priority] - prioritySorted[b.priority]
        if (sorted === 'priorityDescending') return prioritySorted[b.priority] - prioritySorted[a.priority]
        if (sorted === 'dateAscending') return new Date(a.date).getTime() - new Date(b.date).getTime()
        if (sorted === 'dateDescending') return new Date(b.date).getTime() - new Date(a.date).getTime()
        return 0
    })
    return {
        formattedTaskArray,
        setSorted,
        sorted
    }
}