import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { addPlayer } from "../../redux/slices/playersSlices";

const PlayerCreatorPage: React.FC = () => {
  const [publicName, setPublicName] = useState("no name");
  const [privateName, setPrivateName] = useState("no name");
  const [race, setRace] = useState("no race");
  const [age, setAge] = useState("no age");
  const [moral, setMoral] = useState("no moral");
  const [personalGoal, setPersonalGoal] = useState("no goal");
  const [appearance, setAppearance] = useState("no appearance");
  const [prehistory, setPrehistory] = useState("no prehistory");
  const [playerObj, setPlayerObj] = useState({});

  const players = useAppSelector((state) => state.players);

  // const uniqueId = nanoid();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(playerObj);
    // console.log(`UNIQUEID:${uniqueId}`);
    // console.log(`UNIQUEID-V2:${uniqueId2}`);
    // console.log(nanoid());
  }, [playerObj]);

  type PlayerObject = {
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

  const submitForm = () => {
    const player: PlayerObject = {
      id: nanoid(),
      publicName: publicName,
      privateName: privateName,
      race: race,
      age: age,
      moral: moral,
      personalGoal: personalGoal,
      appearance: appearance,
      prehistory: prehistory,
    };
    setPlayerObj(player);
    dispatch(addPlayer(player));
    console.log("submited");
    return;
  };

  return (
    <>
      <p>please create your character</p>

      <input
        type="text"
        placeholder="public name"
        onChange={(e) => {
          setPublicName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="private name"
        onChange={(e) => {
          setPrivateName(e.target.value);
          // setTestObject({ ...testObject, privateName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="race"
        onChange={(e) => {
          setRace(e.target.value);
          // setTestObject({ ...testObject, race: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => {
          setAge(e.target.value);
          // setTestObject({ ...testObject, age: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="moral"
        onChange={(e) => {
          setMoral(e.target.value);
          // setTestObject({ ...testObject, moral: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="personal goal"
        onChange={(e) => {
          setPersonalGoal(e.target.value);
          // setTestObject({ ...testObject, personalGoal: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="appearance"
        onChange={(e) => {
          setAppearance(e.target.value);
          // setTestObject({ ...testObject, appearance: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="prehistory"
        onChange={(e) => {
          setPrehistory(e.target.value);
          // setTestObject({ ...testObject, prehistory: e.target.value });
        }}
      />

      <br />
      <button type="submit" onClick={() => submitForm()}>
        submit
      </button>
    </>
  );
};

export default PlayerCreatorPage;
