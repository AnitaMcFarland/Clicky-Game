import React from "react";
// import Game from "../Game";
import "./game.css";

function GameCard(props) {
  return (
    <div className="GameCard" onClick={() => props.handleImgClick(props.id)}>
      <img src={props.image} alt={props.name}/>
    </div>
  );
}

export default GameCard;
