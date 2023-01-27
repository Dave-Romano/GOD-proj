import { useEffect, useState } from "react";

const PlayerCreatorPage: React.FC = () => {
  // const [publicNameValue, setPublicNameValue] = useState("");
  // const [privateNameValue, setPrivateNameValue] = useState("");
  const [testObject, setTestObject] = useState({});

  useEffect(() => {
    console.log(testObject);
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
    // let keyed = testObject.privateName;
    // let result = { keyed: testObject };
  };

  return (
    <>
      <p>please create your character</p>

      <input
        type="text"
        placeholder="public name"
        onChange={(e) => {
          setTestObject({ ...testObject, publicName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="private name"
        onChange={(e) => {
          setTestObject({ ...testObject, privateName: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="race"
        onChange={(e) => {
          setTestObject({ ...testObject, race: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => {
          setTestObject({ ...testObject, age: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="moral"
        onChange={(e) => {
          setTestObject({ ...testObject, moral: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="personal goal"
        onChange={(e) => {
          setTestObject({ ...testObject, personalGoal: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="appearance"
        onChange={(e) => {
          setTestObject({ ...testObject, appearance: e.target.value });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="prehistory"
        onChange={(e) => {
          setTestObject({ ...testObject, prehistory: e.target.value });
        }}
      />

      <p>are you regular player?</p>
      <button type="button">yes</button>

      <br />
      <button type="submit" onClick={() => console.log("clicked")}>
        submit
      </button>
    </>
  );
};

export default PlayerCreatorPage;
