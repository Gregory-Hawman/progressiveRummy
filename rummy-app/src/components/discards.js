import { useState } from "react"

function Discards({ discardPile, setDiscardPile, discardCount, setDiscardCount, setDrawnCard, hasCardDrawn, setHasCardDrawn, isDiscardRed}) {
  console.log(discardPile)

  const handleDiscardDraw = () => {
    let drawnCard = discardPile.shift()
    setHasCardDrawn(true)
    setDiscardCount(discardCount - 1)
    setDrawnCard(drawnCard)
  }
  
  return (
    <div>
      <div className='discard' onClick={hasCardDrawn ? null : handleDiscardDraw}>
        <h1 className={isDiscardRed ? 'discardRed' : 'discardBlack'}>{discardPile[0]}</h1>
      </div>

      <div className='counters'>
        <div>{discardCount}</div>
      </div>
    </div>
  )
}

export default Discards