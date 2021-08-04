import React, { useState } from 'react';
import './App.css';
import Deck from './components/deck';
import Discards from './components/discards';
import DrawnCard from './components/drawnCard';
import DealCards from './components/deal';

const suits = ['S', 'H', 'C', 'D'];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const jokers = ['JR', 'JB']
let cards = [];
const playersList = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8']


function App() {
  const [playerCount, setPlayerCount] = useState(4);
  const [deckAmount, setDeckAmount] = useState(2);

  const [deckPile, setDeckPile] = useState(cards);
  const [discardPile, setDiscardPile] = useState([])
  
  const [drawnCard, setDrawnCard] = useState([])
  const [hasCardDrawn, setHasCardDrawn] = useState(false)

  const [deckCount, setDeckCount] = useState(cards.length);
  const [discardCount, setDiscardCount] = useState(discardPile.length);

  const [round, setRound] = useState(3);

  function setDecks() {
    let d = 0
    while ( d < deckAmount ) {
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
  };

  setDecks();

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

  const less = '<'
  const more = '>'

  const addPlayers = () => {
    if ( playerCount === 8){
      return null
    } else {
      if (playerCount > 4){
        cards = []
        setDeckAmount(3)
        setDecks()
        setDeckCount(cards.length)
      } else if (playerCount > 6){
        cards = []
        setDeckAmount(4)
        setDecks()
        setDeckCount(cards.length);
      }
      setPlayerCount(playerCount + 1) 
    }
  }

  const removePlayers = () => {
    if (playerCount === 2){
      return null
    } else {
      if (playerCount < 7){
        cards = []
        setDeckAmount(3)
        setDecks()
        setDeckCount(cards.length)
      } else if (playerCount < 5){
        cards = []
        setDeckAmount(2)
        setDecks()
        setDeckCount(cards.length);
      }
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

        <div>
          <Players 
            playerCount={playerCount}
          />
        </div>

      </header>
    </div>
  );
}

function Players ({ playerCount }) {
  console.log('ALL AVAILABLE PLAYERS', playersList)
  const playersListCopy = playersList
  const playersArray = playersListCopy
  console.log('CURRENT PLAYERS', playersArray);
  console.log('ALL AVAILABLE PLAYERS', playersList)
  
  return (
    <div className='players'>
      {playersArray.map((player, index) => {
        const playerHand = ['AH'];
        return (
          <div key={index}>
            <h3>{player}</h3>
            <div className= 'hand'>
              {playerHand}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App;
