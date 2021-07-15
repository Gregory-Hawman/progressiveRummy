import React from 'react';
import '..//App.css';

function DrawnCard({ drawnCard, discardPile, setDrawnCard, discardCount, setDiscardCount, hasCardDrawn, setHasCardDrawn }) {

    const discardCard = () => {
      discardPile.splice(0, 0, drawnCard)
      setDiscardCount(discardCount + 1)
      setHasCardDrawn(false)
      setDrawnCard([])    
    }
  
    return (
      <div className='drawn'>
        <button>Keep</button>
        <div className='discard'>
          <h1>{drawnCard}</h1>
        </div>
        <button onClick={hasCardDrawn ? discardCard : null}>Discard</button>
      </div>
    )
  }

  export default DrawnCard