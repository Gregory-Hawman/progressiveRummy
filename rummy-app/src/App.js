import React, { useState } from 'react'
import './App.css';

const suits = ['S', 'H', 'C', 'D'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const cards = [];
const numOfDecks = 2;
const jokers = numOfDecks*2



for(let i=0; i < suits.length; i++) {
  for(let j=0; j < values.length; j++) {
    cards.push(`${values[j]}${suits[i]} `)
  };
};
for(let i=0; i < suits.length; i++) {
  for(let j=0; j < values.length; j++) {
    cards.push(`${values[j]}${suits[i]} `)
  };
};

console.log(cards);

function App() {
  const [drawPile, setDrawPile] = useState(cards);
  const [discardPile, setDiscardPile] = useState([])
  const [drawnCard, setDrawnCard] = useState([])
  const [drawCount, setDrawCount] = useState(cards.length);
  const [discardCount, setDiscardCount] = useState(discardPile.length);
  console.log(discardCount)
  
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
  
    setDrawPile(array);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => Shuffle(cards)}>Shuffle</button>
        <Deck 
          drawPile={drawPile}
          drawCount={drawCount}
          setDrawCount={setDrawCount}
          setDrawnCard={setDrawnCard}
          discardPile={discardPile}
          discardCount={discardCount}
          setDiscardCount={setDiscardCount}
        />
        <DrawnCard 
          drawnCard={drawnCard}
          setDrawnCard={setDrawnCard}
          discardPile={discardPile}
          discardCount={discardCount}
          setDiscardCount={setDiscardCount}
        />
        
      </header>
    </div>
  );
}

function Deck({ drawPile, drawCount, setDrawCount, setDrawnCard, discardPile, discardCount, setDiscardCount }) {
  console.log(drawPile)
  const handleDrawCard = () => {
    let drawnCard = drawPile.shift()
    setDrawCount(drawCount - 1)
    setDrawnCard(drawnCard)
  }

  return (
    <div>
      <div className='deckArea'>
        <div className='deck' onClick={handleDrawCard}>
          <DeckCards 
            drawPile={drawPile}
            setDrawnCard={setDrawnCard}
          />
        </div>
        <div className='discard'>
          <DiscardCards
            discardPile={discardPile}
            discardCount={discardCount}
            setDiscardCount={setDiscardCount}
          />
        </div>
      </div>
      <div className='counters'>
        <div>{drawCount}</div>
        <div>{discardCount}</div>
      </div>
    </div>
  )
}

function DeckCards({ drawPile }) {
  return (
    <div className='cardBack' >
      <div className='innerBack'>
        <h1>{drawPile[0]}</h1>
      </div>
    </div>
  )
}

function DrawnCard({ drawnCard, discardPile, setDrawnCard, discardCount, setDiscardCount }) {
  const discardCard = () => {
    discardPile.splice(0, 0, drawnCard)
    setDiscardCount(discardCount + 1)
    setDrawnCard([])
  }

  return (
    <div className='drawn'>
      <button>Keep</button>
      <div className='discard'>
        <h1>{drawnCard}</h1>
      </div>
      <button onClick={discardCard}>Discard</button>
    </div>
  )
}

function DiscardCards({ discardPile }) {
  const checkRed = () => {
    // parce through the value
    // if value has H || D then its red
    // else its black
  }

  return (
    <div className='cardFront'>
      <div className='innerFrontRed'>
        <h1>{discardPile[0]}</h1>
      </div>
    </div>
  )
}


export default App;
