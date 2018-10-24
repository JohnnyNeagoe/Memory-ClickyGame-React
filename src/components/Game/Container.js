import React from "react";
import "./Container.css";
import Game from "./Game";

const Container = props => (
    <div className="charBin">
        <div className="cardgrid">
            {props.cards.map(card => 
                <Game
                    handleClick={props.handleClick}
                    cardId={card.id}
                    guessed={props.guessed}
                    key={card.id}
                >
                    <img src={require(`../../../public/images/${card.src}.jpg`)} alt={card.id} data-value={card.id} height="185" width="185"></img>
                </Game>
            )}
        </div>
    </div>
);

export default Container;