import { createStore } from "redux";

const initialState = {
  hpJake: 100,
  hpIuda: 100,
  hpLeo: 100,
};

// VERYBADCODE
interface ReducerProps {
  type: any;
  payload: any;
}

const reducer = (state = initialState, { type, payload }: ReducerProps) => {
  switch (type) {
    case "counter/Increment":
      return {
        hpJake: state.hpJake + payload,
      };
    case "counter/Decrement":
      return {
        hpJake: state.hpJake - payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
