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

// type InitialStateTypes = {
//   players: object[];
// };

// const initialState: InitialStateTypes =
//  {
//   players: [],
// };

// type InitialStateTypes = {
//   players: object[];
// };

const initialState: Array<PlayerElementTypes> = [];

// const testFN = (playerObject: PlayerElementTypes) => {};

const playersSlices = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<PlayerElementTypes>) {
      state.push({
        id: action.payload.id,
        publicName: action.payload.publicName,
        privateName: action.payload.privateName,
        race: action.payload.race,
        age: action.payload.age,
        moral: action.payload.moral,
        personalGoal: action.payload.personalGoal,
        appearance: action.payload.appearance,
        prehistory: action.payload.prehistory,
      });
      console.log("reduser is working!!");
    },
  },
});

export const { addPlayer } = playersSlices.actions;

export default playersSlices.reducer;
