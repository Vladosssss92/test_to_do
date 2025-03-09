import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStoreTask, ITask } from "../../types/taskTypes";

const loadFromLocalStorage = (): ITask[] => {
    try {
        const loadLocalStorageData = localStorage.getItem("tasks");
        if (loadLocalStorageData) {
            return JSON.parse(loadLocalStorageData);
        }
        return [];
    } catch (error) {
        console.log("Ошибка загрузки из локального хранилища ", error);
        return [];
    }
};

const initialState: IStoreTask = { newTask: loadFromLocalStorage() || [] };

const taskSlice = createSlice({
    name: "newTask",
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<ITask>) => {
            state.newTask.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<ITask[]>) => {
            state.newTask = action.payload;
        },
    },
});

export const { addNewTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;