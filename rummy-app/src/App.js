import React, { useState } from 'react';
import './App.css';
import Deck from './components/deck';
import Discards from './components/discards';
import DrawnCard from './components/drawnCard';
import DealCards from './components/deal';

const suits = ['S', 'H', 'C', 'D'];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const jokers = ['JoR', 'JoB']
let cards = [];
const playersList = [
  {name: 'Player 1', hand: []},
  {name: 'Player 2', hand: []},
  {name: 'Player 3', hand: []},
  {name: 'Player 4', hand: []},
  {name: 'Player 5', hand: []},
  {name: 'Player 6', hand: []},
  {name: 'Player 7', hand: []},
  {name: 'Player 8', hand: []},
]


function App() {
  //General State
  const [deckPile, setDeckPile] = useState(cards);
  const [discardPile, setDiscardPile] = useState([]);
  const [deckCount, setDeckCount] = useState(cards.length);
  const [discardCount, setDiscardCount] = useState(discardPile.length);
  const [isRed, setIsRed] = useState(false);
  const [isDiscardRed, setIsDiscardRed] = useState(false);

  //Game Setup State
  const [playerCount, setPlayerCount] = useState(4);
  const [playerAmountSelected, setPlayerAmountSelected] = useState(false);
  const [lessPlayers, setLessPlayers] = useState(true)

  //Deal Phase State
  const [round, setRound] = useState(1);
  const [roundLimit, setRoundLimit] = useState(round + 2)
  const [startingPosition, setStartingPosition] = useState("Player 1")
  
  //Playing Phase State
  const [currentPlayer, setCurrentPlayer] = useState(startingPosition)
  const [drawnCard, setDrawnCard] = useState([]);
  const [hasCardDrawn, setHasCardDrawn] = useState(false);
  
  //Last Card Phase State
  const [initialOut, setInitialOut] = useState(currentPlayer)
  const [gameOver, setGameOver] = useState(false)


  function addPlayers () {
    if ( playerCount === 8){
      return null
    } else {
      setPlayerCount(playerCount + 1)
    }
  }

  function removePlayers () {
    if (playerCount === 2){
      return null
    } else {
      setPlayerCount(playerCount - 1)
    }
  }

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

  function readyUp() {
    setPlayerAmountSelected(!playerAmountSelected)
    if(playerCount === 2) {
      setDecks(2)
    } else {
      setDecks(Math.ceil(playerCount/2))
    }
    setDeckCount(cards.length)
  }

  function setDecks(deckAmount) {
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

  // console.log('PLAYER COUNT', playerCount)
  // console.log('MATH CEIL', Math.ceil(playerCount/2))
  // console.log('CARDS' ,cards.length)

  return (
    <div className="App">
      <header className="App-header">
        {playerAmountSelected ? 
          null : 
          <div>
            <h2>How many Players?</h2>
            <button onClick={removePlayers}> {less} </button>
            {playerCount}
            <button onClick={addPlayers}> {more} </button>
            <button onClick={readyUp}>Ready?</button>
          </div>
        }
        
        
        {playerAmountSelected ?
          <div>
            <div>
              {/* <button onClick={DealCards}>Deal</button> */}
              <button onClick={() => Shuffle(cards)}>Shuffle</button>
            </div>
            <div className='deckArea'>
              
              <div>
                <Deck 
                  deckPile={deckPile}
                  deckCount={deckCount}
                  setDeckCount={setDeckCount}

                  setDrawnCard={setDrawnCard}
                  hasCardDrawn={hasCardDrawn}
                  setHasCardDrawn={setHasCardDrawn}
                  setIsRed={setIsRed}

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
                  isDiscardRed={isDiscardRed}
                />
              </div> 
            </div>
          </div>
          : null
        }
        
        {playerAmountSelected ? 
          <div>
            <DrawnCard 
              drawnCard={drawnCard}
              isRed={isRed}
              setIsDiscardRed={setIsDiscardRed}
              setDrawnCard={setDrawnCard}
              hasCardDrawn={hasCardDrawn}
              setHasCardDrawn={setHasCardDrawn}

              discardPile={discardPile}
              setDiscardPile={setDiscardPile}
              discardCount={discardCount}
              setDiscardCount={setDiscardCount}
            />
          </div>
          : null
        }

        {playerAmountSelected ? 
          <div>
            <Players 
              playerCount={playerCount}
            />
          </div>
          : null
        }
        

      </header>
    </div>
  );
}

function Players ({ playerCount }) {
  // console.log('ALL AVAILABLE PLAYERS', playersList)
  // const playersListCopy = playersList
  // const playersArray = playersListCopy
  // console.log('CURRENT PLAYERS', playersArray);
  // console.log('ALL AVAILABLE PLAYERS', playersList)
  
  return (
    <div className='players'>
      {/* {playersArray.map((player, index) => {
        const playerHand = ['AH'];
        console.log(player.playerHand);
        return (
          <div key={index}>
            <h3>{player}</h3>
            <div className= 'hand'>
              {playerHand}
            </div>
          </div>
        )
      })} */}

    </div>
  )
}


export default App;
