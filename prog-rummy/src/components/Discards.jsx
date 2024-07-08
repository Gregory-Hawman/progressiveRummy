import { useState } from "react"

function Discards(props) {

  const handleDiscardDraw = () => {
    let drawnCard = props.discardPile.shift()
    props.setHasCardDrawn(true)
    props.setDiscardCount(discardCount - 1)
    props.setDrawnCard(drawnCard)
  }
  
  return (
    <div>
      <div className='discard' onClick={props.hasCardDrawn ? null : ()=> handleDiscardDraw()}>
        <h1 className={props.isDiscardRed ? 'discardRed' : 'discardBlack'}>{props.discardPile[0]}</h1>
      </div>

      <div className='counters'>
        <div>{props.discardCount}</div>
      </div>
    </div>
  )
}

export default Discards

// {props.discardPile[0]}