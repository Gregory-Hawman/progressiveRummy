import React, { useState } from 'react';
import './App.css';
import Deck from './components/deck';
import Discards from './components/discards';
import DrawnCard from './components/drawnCard';

const suits = ['S', 'H', 'C', 'D'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const jokers = ['JR', 'JB']
const cards = [];
const numOfDecks = 2;

let d = 0 //decks
while ( d < numOfDecks ) {
  for(let i=0; i < suits.length; i++) {
    for(let j=0; j < values.length; j++) {
      cards.push(`${values[j]}${suits[i]} `)
    }
  }
  for (let i=0; i < jokers.length; i++ ) {
    cards.push(`${jokers[i]}`)
  }
  d++;
}

function App() {
  const [deckPile, setDeckPile] = useState(cards);
  const [discardPile, setDiscardPile] = useState([])

  const [drawnCard, setDrawnCard] = useState([])
  const [hasCardDrawn, setHasCardDrawn] = useState(false)

  const [deckCount, setDeckCount] = useState(cards.length);
  const [discardCount, setDiscardCount] = useState(discardPile.length);

  const [playerCount, setPlayerCount] = useState(4);
  const [round, setRound] = useState(3);
  
  function Shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    setDeckPile(array);
  }

  // function DealCards () {
  //   Shuffle(cards)

  // }

  const less = '<'
  const more = '>'

  const addPlayers = () => {
    if ( playerCount === 8){
      return null
    } else {
      setPlayerCount(playerCount + 1)
    }
  }
  const removePlayers = () => {
    if (playerCount === 2){
      return null
    } else {
      setPlayerCount(playerCount - 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>How many Players?</h2>
          <button onClick={removePlayers}> {less} </button>
          {playerCount}
          <button onClick={addPlayers}> {more} </button>
        </div>
        {/* <button onClick={DealCards}>Deal</button> */}
        <button onClick={() => Shuffle(cards)}>Shuffle</button>

        <div className='deckArea'>
          <div>
            <Deck 
              deckPile={deckPile}
              deckCount={deckCount}
              setDeckCount={setDeckCount}

              setDrawnCard={setDrawnCard}
              hasCardDrawn={hasCardDrawn}
              setHasCardDrawn={setHasCardDrawn}

              discardPile={discardPile}
              discardCount={discardCount}
              setDiscardCount={setDiscardCount}
            />
          </div>
          
          <div>
            <Discards
              discardPile={discardPile}
              discardCount={discardCount}
              setDiscardCount={setDiscardCount}

              setDrawnCard={setDrawnCard}
              hasCardDrawn={hasCardDrawn}
              setHasCardDrawn={setHasCardDrawn}
            />
          </div> 
        </div>
        
        <div>
          <DrawnCard 
            drawnCard={drawnCard}
            setDrawnCard={setDrawnCard}
            hasCardDrawn={hasCardDrawn}
            setHasCardDrawn={setHasCardDrawn}

            discardPile={discardPile}
            setDiscardPile={setDiscardPile}
            discardCount={discardCount}
            setDiscardCount={setDiscardCount}
          />
        </div>

        <div>
          {/* <DealCards 
          drawPile={deckPile}
          playerCount={playerCount}
          round={round}
          setDeckCount={setDeckCount}
          /> */}
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
