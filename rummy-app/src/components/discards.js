import React from 'react';
import '..//App.css';

function Discards({ discardPile, setDiscardPile, discardCount, setDiscardCount, setDrawnCard, hasCardDrawn, setHasCardDrawn }) {
    const handleDiscardDraw = () => {
      let drawnCard = discardPile.shift()
      setHasCardDrawn(true)
      setDiscardCount(discardCount - 1)
      setDrawnCard(drawnCard)
    }
  
    // const checkRed = () => {
    //   // parce through the value
    //   // if value has H || D then its red
    //   // else its black
    // }
  
    return (
      <div>
        <div className='discard' onClick={hasCardDrawn ? null : handleDiscardDraw}>
          <div className='cardFront'>
            <div className='innerFrontRed'>
              <h1>{discardPile[0]}</h1>
            </div>
          </div>
        </div>
        <div className='counters'>
          <div>{discardCount}</div>
        </div>
      </div>
    )
  }

  export default Discards