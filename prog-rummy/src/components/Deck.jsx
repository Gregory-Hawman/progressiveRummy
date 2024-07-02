import React from 'react';
import '..//App.css';

function Deck({ deckPile, deckCount, setDeckCount, discardPile, discardCount, setDiscardCount, setDrawnCard, hasCardDrawn, setHasCardDrawn, setIsRed }) {

    const handleDrawCard = () => {
      if (discardPile.length === 0){
        let initialFlip = deckPile.shift()
        setDiscardCount(discardCount + 1)
        discardPile.splice(0, 0, initialFlip)
      } else {
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