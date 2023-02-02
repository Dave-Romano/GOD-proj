import { useEffect, useState } from "react";

const PlayerCreatorPage: React.FC = () => {
  const [publicName, setPublicName] = useState("no name");
  const [privateName, setPrivateName] = useState("no name");
  const [race, setRace] = useState("no race");
  const [age, setAge] = useState("no age");
  const [moral, setMoral] = useState("no moral");
  const [personalGoal, setPersonalGoal] = useState("no goal");
  const [appearance, setAppearance] = useState("no appearance");
  const [prehistory, setPrehistory] = useState("no prehistory");

  const testObject = {
    publicName: publicName,
    privateName: privateName,
    race: race,
    age: age,
    moral: moral,
    personalGoal: personalGoal,
    appearance: appearance,
    prehistory: prehistory,
  };

  const shortid = require("shortid");

  useEffect(() => {
    console.log(testObject);
    // console.log(shortid.generate());
  });

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

  const submitForm = (testObject: PlayerObject) => {
    const player = {
      id: shortid,
      isActive: true,
      isGuest: false,
      publicName: "",
      privateName: "",
      race: "",
      age: "",
      moral: "",
      personalGoal: "",
      appearance: "",
      prehistory: "",
      //- - -
      needs: [
        { water: 72 },
        { food: 72 },
        { sleep: 72 },
        { purity: 72 },
        { endurance: 150 },
      ],
      effects: [
        { buffs: {} },
        { debuffs: {} },
        { hiddenBuffs: {} },
        { hiddenDebuffs: {} },
      ],
      //- - -
      stats: [
        { damage: 20 },
        { health: 20 },
        { endurance: 20 },
        { magicDamage: 20 },
        { will: 30 },
        { mind: 30 },
      ],
      skills: [{}],
      abilities: { fireBall: {} },
      //- - -
      inventory: [
        { weapon: {} },
        { apparel: {} },
        { potions: {} },
        { ingredients: {} },
        { scrolls: {} },
        { equipment: {} },
        { misc: {} },
        { gold: {} },
        { questItems: {} },
      ],
    };
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
      <button type="submit" onClick={() => console.log("clicked")}>
        submit
      </button>
    </>
  );
};

export default PlayerCreatorPage;
