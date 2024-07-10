import React from 'react';
import DrawPile from './DrawPile';
import Discards from './Discards';
import CardFace from './CardFace';

export default function Table(props) {
  return (
        <div>
        <div className="octagon-table octagon-table-path flex flex-col">
            <h1>CARD TABLE</h1>
            {/* <DrawPile />

            <Discards 
                    hasCardDrawn={props.hasCardDrawn}
                    setHasCardDrawn={props.setHasCardDrawn}
                    discardPile={props.discardPile}
                    setDiscardPile={props.setDiscardPile}
                    discardCount={props.discardCount}
                    drawnCard={props.drawnCard}
                    setDrawnCard={props.setDrawnCard}
                    isDiscardRed={props.isDiscardRed}
                    setIsDiscardRed={props.setIsDiscardRed}
            /> */}
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
        <div className="octagon-table-2 octagon-table-path">
        </div>
    </div>
    
  )
};