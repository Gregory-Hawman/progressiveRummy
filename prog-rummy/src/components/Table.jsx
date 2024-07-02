import React from 'react';
import DrawPile from './DrawPile';

export default function Table() {
  return (
    <div className="table">
        <h1>CARD TABLE</h1>
        <DrawPile />
        {/* <div className="deckArea">
            <Deck 
                deckPile={deckPile}
                deckCount={deckCount}
                setDeckCount={setDeckCount}

                setDrawnCard={setDrawnCard}
                hasCardDrawn={hasCardDrawn}
                setHasCardDrawn={setHasCardDrawn}
                setIsRed={setIsRed}

                discardPile={discardPile}
                discardCount={discardCount}
                setDiscardCount={setDiscardCount}
            />
            <Discards
                discardPile={discardPile}
                discardCount={discardCount}
                setDiscardCount={setDiscardCount}

                setDrawnCard={setDrawnCard}
                hasCardDrawn={hasCardDrawn}
                setHasCardDrawn={setHasCardDrawn}
                isDiscardRed={isDiscardRed}
            />
        </div>
        {playerAmountSelected ?
                <div>
                    <div>
                    <button onClick={DealCards}>Deal</button>
                    <button onClick={() => Shuffle(cards)}>Shuffle</button>
                    </div>
                    <div className='deckArea'>
        
                    </div>
                </div>
                : null
            }

            {playerAmountSelected ? 
                <div>
                    <DrawnCard 
                    drawnCard={drawnCard}
                    isRed={isRed}
                    setIsDiscardRed={setIsDiscardRed}
                    setDrawnCard={setDrawnCard}
                    hasCardDrawn={hasCardDrawn}
                    setHasCardDrawn={setHasCardDrawn}
                    round={round}
                    playerCount={playerCount}
                    discardPile={discardPile}
                    setDiscardPile={setDiscardPile}
                    discardCount={discardCount}
                    setDiscardCount={setDiscardCount}
                    />
                </div>
                : null
            }

            {playerAmountSelected ? 
                <div>
                    <Players 
                    playerCount={playerCount}
                    />
                </div>
                : null
            } */}
    </div>
  )
};