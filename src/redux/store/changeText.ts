import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ArrayElement = {
  id: string;
  title: string;
  compleated: boolean;
};

type TypesForInitialState = {
  testArray: ArrayElement[];
  word: string;
};

const initialState: TypesForInitialState = {
  testArray: [],
  word: "first",
};

const changeText = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeWord(state, action) {
      state.word = action.payload;
      console.log("reduser is working!!");
      console.log(`full state:${state.testArray}, ${state.word}`);
      console.log(`action.payload:${action.payload}`);
    },

    changeList(state, action: PayloadAction<string>) {
      state.testArray.push({
        id: new Date().toISOString(),
        title: action.payload,
        compleated: false,
      });
    },
  },
});

export const { changeWord, changeList } = changeText.actions;

export default changeText.reducer;
