import { PlayerCreatorPageStyled } from "./playerCreatorPageStyled";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { addPlayer } from "../../redux/slices/playersSlices";

const PlayerCreatorPage: React.FC = () => {
  const [publicName, setPublicName] = useState("");
  const [privateName, setPrivateName] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [moral, setMoral] = useState("");
  const [personalGoal, setPersonalGoal] = useState("");
  const [appearance, setAppearance] = useState("");
  const [prehistory, setPrehistory] = useState("");
  //- - - - - - - - - - - - - - - - - - - - - - - - - - -
  const [damage, setDamage] = useState(0);
  const [complection, setComplection] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [magicPower, setMagicPower] = useState(0);
  const [will, setWill] = useState(0);
  const [mind, setMind] = useState(0);
  //- - - - - - - - - - - - - - - - - - - - - - - - - - -
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
    damage: number;
    complection: number;
    endurance: number;
    magicPower: number;
    will: number;
    mind: number;
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
      damage: damage,
      complection: complection,
      endurance: endurance,
      magicPower: magicPower,
      will: will,
      mind: mind,
    };
    setPlayerObj(player);
    dispatch(addPlayer(player));
    console.log("submited");
    return;
  };

  const numbersOnly = (e: any) => {
    const re = /[0-9A-F:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  // const test44 = [
  //   setPublicName,
  //   setPrivateName,
  //   setRace,
  //   setAge,
  //   setMoral,
  //   setPersonalGoal,
  //   setAppearance,
  // ].map((item) => `${item}(e.target.value)`);

  // const test45 = [
  //   "public name",
  //   "private name",
  //   "race",
  //   "age",
  //   "moral",
  //   "personal goal",
  //   "appearance",
  // ];

  // const test46 = {
  //   setPublicName: "public name",
  // };

  // setPublicName(e.target.value);
  // setPrivateName(e.target.value);
  // setRace(e.target.value);
  // setAge(e.target.value);
  // setMoral(e.target.value);
  // setPersonalGoal(e.target.value);
  // setAppearance(e.target.value);

  return (
    <PlayerCreatorPageStyled>
      <p>please create your character</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
          e.currentTarget.reset();
          return;
        }}
      >
        <div className="container">
          <div className="tier-1">
            <p>main information</p>

            <input
              className="input"
              type="text"
              placeholder="public name"
              onChange={(e) => {
                setPublicName(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="private name"
              onChange={(e) => {
                setPrivateName(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="race"
              onChange={(e) => {
                setRace(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="moral"
              onChange={(e) => {
                setMoral(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="personal goal"
              onChange={(e) => {
                setPersonalGoal(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="appearance"
              onChange={(e) => {
                setAppearance(e.target.value);
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="prehistory"
              onChange={(e) => {
                setPrehistory(e.target.value);
              }}
            />
          </div>

          <div className="tier-2">
            <p>attributes</p>
            <input
              className="input"
              type="text"
              placeholder="damage"
              onKeyDown={(e) => {
                numbersOnly(e);
              }}
              onChange={(e) => {
                setDamage(Number(e.target.value));
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="complection"
              onKeyDown={(e) => {
                numbersOnly(e);
              }}
              onChange={(e) => {
                setComplection(Number(e.target.value));
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="endurance"
              onKeyDown={(e) => {
                numbersOnly(e);
              }}
              onChange={(e) => {
                setEndurance(Number(e.target.value));
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="magic power"
              onKeyDown={(e) => {
                numbersOnly(e);
              }}
              onChange={(e) => {
                setMagicPower(Number(e.target.value));
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="will"
              onKeyDown={(e) => {
                numbersOnly(e);
              }}
              onChange={(e) => {
                setWill(Number(e.target.value));
              }}
            />
            <input
              className="input"
              type="text"
              placeholder="mind"
              onKeyDown={(e) => {
                numbersOnly(e);
              }}
              onChange={(e) => {
                setMind(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <p>skills</p>
        <div className="container">
          <div>
            <p>social</p>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <p>neutral</p>
          </div>
          <div>
            <p>combat</p>
          </div>
          <div>
            <p>science</p>
          </div>
          <div>
            <p>outlaw</p>
          </div>
          <div>
            <p>magic</p>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </PlayerCreatorPageStyled>
  );
};

export default PlayerCreatorPage;
