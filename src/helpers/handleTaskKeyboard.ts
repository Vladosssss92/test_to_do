export const handleTaskKeyboard = (
    e: React.KeyboardEvent<HTMLElement>,
    id: string,
    saveTaskChanges: (id: string) => void,
    cancelEditingTask: (id: string) => void
) => {
    if (e.key === 'Enter' && e.target instanceof HTMLTextAreaElement) {
        return;
    }
    if (e.key === 'Enter') {
        saveTaskChanges(id)
    }
    if (e.key === 'Escape') {
        cancelEditingTask(id)
    }

}