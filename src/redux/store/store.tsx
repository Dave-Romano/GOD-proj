import { configureStore } from "@reduxjs/toolkit";
import changeList from "./changeText";
import playerReducers from "../slices/playersSlices";

const store = configureStore({
  reducer: {
    // todos: changeList,
    players: playerReducers,
  },
});

export default store;
// commit
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
