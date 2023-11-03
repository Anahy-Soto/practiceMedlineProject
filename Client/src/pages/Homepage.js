import React from "react";
import Temps from "../Components/Temps";
import Recents from "../Components/Recents";

function Homepage() {
  return (
    <div className="Homepage">
      <Temps />
      <Recents />
    </div>
  );
}

export default Homepage;
