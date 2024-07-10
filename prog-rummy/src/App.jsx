import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home.jsx';
import Rules from './pages/Rules.jsx';
import DeckEditor from './pages/DeckEditor.jsx';
import Navbar from './components/Navbar.jsx';
import Table from './components/Table.jsx';
import GameSetup from './components/GameSetup.jsx';
import Shuffle from '../../prog-rummy/src/actions/Shuffle.js';
import AddRemovePlayers from '../../prog-rummy/src/actions/AddRemovePlayers.js';
import ReadyUp from '../../prog-rummy/src/actions/ReadyUp.js';

export default function App() {
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
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/rules' element={<Rules />} />
                    <Route path='/deck-editor' element={<DeckEditor />} />
                    <Route path="/game-setup" element={<GameSetup/>} />
                    <Route path="/table" element={
                        <Table 
                            hasCardDrawn={hasCardDrawn}
                            setHasCardDrawn={setHasCardDrawn}
                            discardPile={discardPile}
                            setDiscardPile={setDiscardPile}
                            discardCount={discardPile.length}
                            drawnCard={drawnCard}
                            setDrawnCard={setDrawnCard}
                            isDiscardRed={isDiscardRed}
                            setIsDiscardRed={setIsDiscardRed}
                        />
                    }/>

                </Routes>
            </div>
        </BrowserRouter>
    );
};