import { configureStore } from "@reduxjs/toolkit";
import changeList from "./store/changeText";

const store = configureStore({
  reducer: {
    todos: changeList,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
