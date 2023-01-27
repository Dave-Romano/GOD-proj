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

const testFN = (playerObject:PlayerElementTypes) => {
let keye = playerObject.privateName;
let value = playerObject;
let result = {keye:value}
return ...result
}

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<string>) {
      state.players = { ...state.players, {action.payload.privateName}: action.payload };
      console.log("reduser is working!!");
    },
  },
});

export const { addPlayer } = playersSlice.actions;

export default playersSlice.reducer;
