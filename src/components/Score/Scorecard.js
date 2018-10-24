import React from "react";
import "./Scorecard.css";

const Scorecard = (props) => (
    <div className="container">
    <div className="container infoBin">
        <p>
            {props.info}
        </p>
        <p className="score">
            Current Score: {props.currentScore} |
            Top Score: {props.topScore}
        </p>
    </div>
    </div>
);

export default Scorecard;