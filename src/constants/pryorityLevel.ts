import { Priority } from "../types/taskTypes";

export interface PriorityLevel {
    label: string,
    value: Priority
}

export type PriorityFilter = Priority | 'all' 

export const prioritySorted = ['low', 'medium', 'hight']

export const PRIORITY_LEVELS: PriorityLevel[] = [
    { label: "Низкий", value: "low" },
    { label: "Средний", value: "medium" },
    { label: "Высокий", value: "high" },
];