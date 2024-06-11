import React, { useState } from 'react';
import '..//App.css';
import Draw from '../actions/Draw';
import Discard from '../actions/Discard'

function DrawnCard({ drawnCard, discardCard, discardPile, setDrawnCard, discardCount, setDiscardCount, hasCardDrawn, setHasCardDrawn, isRed, setIsDiscardRed, round, playerCount }) {

  return (
    <div>
      <div className='drawnCard'>
        <h1 className={isRed ? 'drawnRed' : 'drawnBlack'}>{drawnCard}</h1>
        <button onClick={() => Draw(drawnCard, round, playerCount)}>Keep</button>
        <button onClick={hasCardDrawn ? discardCard : null}>Discard</button>
      </div>
    </div>
      
  )
}

  export default DrawnCard