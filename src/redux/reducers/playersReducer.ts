import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlayerElementTypes = {
  id: string;
  publicName: string;
  privateName: string;
  race: string;
  age: string;
  moral: string;
  personalGoal: string;
  appearance: string;
  prehistory: string;
};

type InitialStateTypes = {
  players: object;
};

const initialState: InitialStateTypes = {
  players: {},
};

const testFN = (playerObject: PlayerElementTypes) => {};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<string>) {
      console.log("reduser is working!!");
    },
  },
});

export const { addPlayer } = playersSlice.actions;

export default playersSlice.reducer;
