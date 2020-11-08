import React from "react";
import NameInput from "../NameInput";
import GenerateNewRoomButton from "../GenerateNewRoomButton";
import JoinExisitingRoomInput from "../JoinExisitingRoomInput";

const Home = () => {
  return (
    <div data-testid="Home">
      <NameInput />
      <GenerateNewRoomButton />
      <JoinExisitingRoomInput />
    </div>
  );
};

export default Home;
