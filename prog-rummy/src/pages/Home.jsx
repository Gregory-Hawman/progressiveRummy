import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
        <div>
            <header className="home-header">
                <h1>Welcome to Progressive Rummy Online!</h1>
                <p>Play this riff on a classic card game with friends or against the computer.</p>
            </header>
            <div className="home-nav">
                <Link to="/game-setup" className="nav-link">Start New Game</Link>
                <Link to="/rules" className="nav-link">How to Play</Link>
                <Link to="/load-game" className="nav-link">Load Saved Game</Link>
            </div>
        </div>
      <footer className="home-footer">
        <p>Enjoy the game and good luck!</p>
      </footer>
    </div>
  );
}