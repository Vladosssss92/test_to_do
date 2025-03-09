import { configureStore } from "@reduxjs/toolkit";
import { IStoreTask } from "../types/taskTypes";
import taskSlice from "./slices/taskSlice";



const saveToLocalStorage = (state: IStoreTask) => {
    try {
        const saveLocalStorageData = JSON.stringify(state.newTask);
        localStorage.setItem("tasks", saveLocalStorageData);
    } catch (error) {
        console.log("Ошибка сохранения в локальное хранилище ", error);
    }
};

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state.tasks);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;