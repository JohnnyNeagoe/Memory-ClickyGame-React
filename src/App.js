import React, { Component } from "react";
import Nav from "./components/Nav/Nav"
import Scorecard from "./components/Score/Scorecard"
import Container from "./components/Game/Container";

class App extends Component {
    state = {
        cards: [],
        guessed: [],
        currentScore: 0,
        topScore: 0,
        info: "Are you a Game of Thrones Guru? Click on the characters below to find out! Just be careful not to click on the same character twice!"
    };

    componentDidMount() {
        let cards = [];
        [...Array(15).keys()].forEach(i => {
            cards.push({ id: i, order: i, src: i });
        });

        this.setState({
            cards: cards
        });
    }

    shuffleCards = () => {
        let shuffledCards = [];
        let randomOrder = [...Array(15).keys()].sort( () => Math.random() - 0.5 );
        this.state.cards.forEach((card, index) => {
            card.order = randomOrder[index];
            shuffledCards.push(card);
        });

        shuffledCards.sort( (a, b) => { return a.order - b.order } );

        this.setState({
            cards: shuffledCards
        });
    }

    handleClick = (event) => {
        if (this.state.guessed.length === this.state.cards.length - 1 && this.state.guessed.includes(event.target.getAttribute("data-value")) === false) {
            this.setState({
                guessed: [],
                currentScore: this.state.currentScore + 1,
                topScore: Math.max(this.state.topScore, this.state.currentScore + 1),
                info: "Great Memory! Click on a new character to continue the current streak"
            });
        } else if (this.state.currentScore === 15) {
            this.setState({
                guessed: [...this.state.guessed, event.target.getAttribute("data-value")],
                currentScore: 1,
                info: "Great job! You got them all! Click any character to start a new game."
            });        
        } else if (this.state.guessed.includes(event.target.getAttribute("data-value"))) {
            this.setState({
                guessed: [],
                currentScore: 0,
                info: "Oh no, you already clicked that character. To start over, click on any character below, good luck!"
            });
        } else {
            this.setState({
                guessed: [...this.state.guessed, event.target.getAttribute("data-value")],
                currentScore: this.state.currentScore + 1,
                topScore: Math.max(this.state.topScore, this.state.currentScore + 1),
                info: "Great Memory! Click on a new character to continue the current streak"
            });
        }

        this.shuffleCards();
    }
    render() {
        return (
            <div>
                <Nav />
                <Scorecard
                    info={this.state.info}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <div className="container">
                    <Container
                        cards={this.state.cards}
                        guessed={this.state.guessed}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default App;