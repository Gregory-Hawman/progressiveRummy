import React from 'react';
import '..//App.css';

//assuming 4 players on first hand for now.
function DealCards({drawPile, deckCount, setDeckCount, playerCount, round, setRound}) {
  //take top card from drawPile and give it to player 1
  console.log(drawPile)
  let handOne = drawPile.shift()
  let handTwo = drawPile.shift()
  let handThree = drawPile.shift()
  let handFour = drawPile.shift()
  console.log(drawPile)

  setDeckCount(deckCount - 1)

  return (
    <div className='players'>
      <div>
        <h3>Player 1</h3>
        <p>{handOne}</p>
      </div>
      <div>
        <h3>Player 2</h3>
        <p>{handTwo}</p>
      </div>
      <div>
        <h3>Player 3</h3>
        <p>{handThree}</p>
      </div>
      <div>
        <h3>Player 4</h3>
        <p>{handFour}</p>
      </div>
    </div>
  )
}

export default DealCards