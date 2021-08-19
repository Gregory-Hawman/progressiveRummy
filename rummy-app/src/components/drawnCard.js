import React, { useState } from 'react';
import '..//App.css';
import { TakeCard } from '../App';

function DrawnCard({ drawnCard, discardPile, setDrawnCard, discardCount, setDiscardCount, hasCardDrawn, setHasCardDrawn, isRed, setIsDiscardRed, round, playerCount }) {


  const discardCard = () => {
    discardPile.splice(0, 0, drawnCard)
    setDiscardCount(discardCount + 1)
    setHasCardDrawn(false)
    setDrawnCard([])
    if (discardPile[0].includes('H') || discardPile[0].includes('D') || discardPile[0].includes('R')) {
      setIsDiscardRed(true)
    } else {
      setIsDiscardRed(false)
    }    
  }


  return (
    <div>
      <div className='drawnCard'>
        <h1 className={isRed ? 'drawnRed' : 'drawnBlack'}>{drawnCard}</h1>
        <button onClick={() => TakeCard(drawnCard, round, playerCount)}>Keep</button>
        <button onClick={hasCardDrawn ? discardCard : null}>Discard</button>
      </div>
    </div>
      
  )
}

  export default DrawnCard