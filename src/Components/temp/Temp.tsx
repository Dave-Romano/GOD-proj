import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { changeWord } from "../../redux/store/changeText";

import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { changeWord } from "../../redux/store/changeText";

interface TempProps {}

const Temp: React.FC = () => {
  const dispatch = useAppDispatch();
  const result = useAppSelector((state) => state.todos.word);

  const [tempState, setTempState] = useState("second");
  const testSending = () => {
    setTempState("update");
  };
  // const importantWord = useAppSelector((state) => state.change.changeWord);

  return (
    <>
      <p>{result}</p>
      <button onClick={() => dispatch(changeWord("worp"))}>add</button>
    </>
  );
};

export default Temp;
