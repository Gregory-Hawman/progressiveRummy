import React from 'react';
import '..//App.css';

function Deck({ deckPile, deckCount, setDeckCount, setDrawnCard, hasCardDrawn, setHasCardDrawn, setIsRed }) {

    const handleDrawCard = () => {
      let drawnCard = deckPile.shift()
      setHasCardDrawn(true)
      setDeckCount(deckCount - 1)
      setDrawnCard(drawnCard)
      if (drawnCard.includes('H') || drawnCard.includes('D') || drawnCard.includes('R')) {
        setIsRed(true)
      } else {
        setIsRed(false)
      }
    }
  
    return (
      <div>
        <div className='deck' onClick={hasCardDrawn ? null : handleDrawCard}>
          <h1>{deckPile[0]}</h1>
        </div>

        <div className='counters'>
          <div>{deckCount}</div>
        </div>
      </div>
    )
  }

  export default Deck;