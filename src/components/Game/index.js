// src/components/Game
import React from "react";
import data from "../../data.json";
// import Shuffle from "shuffle";
import Navbar from "../Navbar";
//  import Header from "./Header";
// import Footer from "./Footer";

import GameCard from "../GameCard";
import "../../App.css";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      score: 0,
      topScore: 0
    };
  }
  gameOver = () => {
      if (this.state.score > this.state.highscore){
          this.setState({highscore: this.state.score}, function(){
              console.log(this.state.highscore);
          });
      }
      this.state.cards.forEach(card => {
        card.count = 0;
      });
      alert("Game Over");
      this.setState({score: 0});
     return true;
  }
  handleImgClick = id => {
    // console.log(id);
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    const {
      data,
      score,
      topScore
    } = this.state;

    return (
        <div>
            <Navbar score={score} topScore={topScore} />
            <div className="container">
                <div className="row">
                    {data.map(item => (
                        <GameCard
                        handleImgClick={this.handleImgClick}
                        key={item.id} {...item} 
                        />)
                    )}
                 </div>
            </div>
        </div>
    );
  }
}

export default Game;



