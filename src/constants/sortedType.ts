export interface Sorted {
    label: string,
    value: SortedValue
}

export type SortedValue = 'dateAscending' | 'dateDescending' | 'priorityAscending' | 'priorityDescending'

export const SORTED_TYPE: Sorted[] = [
    { label: "Дата ↑", value: "dateAscending" },
    { label: "Дата ↓", value: "dateDescending" },
    { label: "Приоритет ↑", value: "priorityAscending" },
    { label: "Приоритет ↓", value: "priorityDescending" },
];

