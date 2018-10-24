import React from "react";
import "./Game.css";

const Game = props => (
    <div 
        className={props.cheat && props.guessed.includes(props.cardId.toString()) ? "thronesChar border border-danger" : "thronesChar"}
        onClick={props.handleClick}
        data-value={props.cardId}
        data-guessed={props.guessed}
    >
        {props.children}
    </div>
);

export default Game;