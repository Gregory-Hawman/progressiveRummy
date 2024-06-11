import React, { useState } from 'react';
import './App.css';

import Table from './components/Table.js';
import GameSetup from './components/GameSetup.js';


import Deck from './components/Deck.js';
import Discards from './components/Discards.js';
import DrawnCard from './components/DrawnCard.js';
// import Players from './components/player';
// import DealCards from './components/deal';

import Shuffle from './actions/Shuffle.js';
import AddRemovePlayers from './actions/AddRemovePlayers.js';
import ReadyUp from './actions/ReadyUp.js';

function App() {
    //General State
    const [gameStarted, setGameStarted] = useState(true)

    const [playersList, setPlayerList] = useState([
      {id: 1, name: 'John', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Gina', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Kate', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Greg', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Ethan', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Anna', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Player 7', hand: [], startingPosition: false, currentPlayer: false},
      {id: 1, name: 'Player 8', hand: [], startingPosition: false, currentPlayer: false},
    ])
    const [deckPile, setDeckPile] = useState();
    const [discardPile, setDiscardPile] = useState([]);

    const [isRed, setIsRed] = useState(false);
    const [isDiscardRed, setIsDiscardRed] = useState(false);

    //Game Setup State
    const [playerCount, setPlayerCount] = useState(4);
    // const [playablePlayers, setPlayablePlayers] = useState([])
    const [playerAmountSelected, setPlayerAmountSelected] = useState(false);

    //Deal Phase State
    const [round, setRound] = useState(1);
    const [roundLimit, setRoundLimit] = useState(round + 2);
    const [startingPosition, setStartingPosition] = useState("Player 1");
    
    //Playing Phase State
    const [currentPlayer, setCurrentPlayer] = useState(startingPosition);
    const [drawnCard, setDrawnCard] = useState([]);
    const [hasCardDrawn, setHasCardDrawn] = useState(false);
    
    //Last Card Phase State
    const [initialOut, setInitialOut] = useState(currentPlayer);
    const [gameOver, setGameOver] = useState(false);


    return (
        <div className="App">
            {gameStarted ? 
                <Table 

                />
                : 
                <GameSetup 
                    playerCount={playerCount}
                    setPlayerCount={setPlayerCount}
                    playerAmountSelected={playerAmountSelected}
                    setPlayerAmountSelected={setPlayerAmountSelected}
                    setDeckCount={setDeckCount}
                /> 
            }
        </div>
    );
};

export default App;
