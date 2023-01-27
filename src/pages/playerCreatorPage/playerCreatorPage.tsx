import { useEffect, useState } from "react";

const PlayerCreatorPage: React.FC = () => {
  const [publicNameValue, setPublicNameValue] = useState("");

  useEffect(() => {
    console.log(publicNameValue);
  });

  return (
    <>
      <p>please create your character</p>

      <input
        type="text"
        placeholder="public name"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="private name"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="race"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="age"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="appearance"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="moral"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />
      <br />
      <input
        onFocus={() => {
          return "lit";
        }}
        type="text"
        placeholder="personal goal"
        onChange={(e) => {
          setPublicNameValue(e.target.value);
        }}
      />

      <p>are you regular player?</p>
      <button type="button">yes</button>

      <br />
      <button type="submit">submit</button>
    </>
  );
};

export default PlayerCreatorPage;
