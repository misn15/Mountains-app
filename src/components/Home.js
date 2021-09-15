import React from "react";
import "../css/Home.css";
import Button from "./Button";
import Winter from "./Winter";

const Home = () => {
  return (
    <div className={"mt"}>
      <div className={"quote"}>
        The mountains are calling and I must go. ~John Muir
      </div>
      <div className="container">
        <div className={"bt"}>
          <button type="button" className={"ui inverted button"}>
            Winter
          </button>
          <div className={"divider"}></div>
          <button type="button" className={"ui inverted button"}>
            Summer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
