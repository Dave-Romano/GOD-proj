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
  players: Array;
};

const initialState: InitialStateTypes = {
  players: [],
};

const testFN = (playerObject: PlayerElementTypes) => {};

const playersSlices = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<string>) {
      state.players.push(action.payload);
      console.log("reduser is working!!");
    },
  },
});

export const { addPlayer } = playersSlices.actions;

export default playersSlices.reducer;
