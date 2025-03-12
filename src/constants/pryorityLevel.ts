import { Priority } from "../types/taskTypes";

export interface PriorityLevel {
    label: string,
    value: Priority
    priority: number,
}

export type PriorityFilter = Priority | 'all'

export const prioritySorted = {
    'low': 0, 
    'medium': 1, 
    'high' : 2
}

export const PRIORITY_LEVELS: PriorityLevel[] = [
    { label: "Низкий", value: "low", priority: 0 },
    { label: "Средний", value: "medium", priority: 1 },
    { label: "Высокий", value: "high", priority: 2 },
];