import React from 'react';
import DrawPile from './DrawPile';
import Discards from './Discards';
import CardFace from './CardFace';

export default function Table(props) {
  return (
        <div>
            <div className="flex">
                <CardFace 
                    value={'A'}
                    suit={'spades'}
                />
                <CardFace 
                    value={2}
                    suit={'spades'}
                />
                <CardFace 
                    value={3}
                    suit={'spades'}
                />
                <CardFace 
                    value={4}
                    suit={'spades'}
                />
                <CardFace 
                    value={5}
                    suit={'spades'}
                />
                <CardFace 
                    value={6}
                    suit={'spades'}
                />
                <CardFace 
                    value={7}
                    suit={'spades'}
                />
                <CardFace 
                    value={8}
                    suit={'spades'}
                />
                <CardFace 
                    value={9}
                    suit={'spades'}
                />
                <CardFace 
                    value={10}
                    suit={'spades'}
                />
                <CardFace 
                    value={'J'}
                    suit={'spades'}
                />
                <CardFace 
                    value={'Q'}
                    suit={'spades'}
                />
                <CardFace 
                    value={'K'}
                    suit={'spades'}
                />
            </div>
            <div className="flex">
                <CardFace 
                    value={'A'}
                    suit={'hearts'}
                />
                <CardFace 
                    value={2}
                    suit={'hearts'}
                />
                <CardFace 
                    value={3}
                    suit={'hearts'}
                />
                <CardFace 
                    value={4}
                    suit={'hearts'}
                />
                <CardFace 
                    value={5}
                    suit={'hearts'}
                />
                <CardFace 
                    value={6}
                    suit={'hearts'}
                />
                <CardFace 
                    value={7}
                    suit={'hearts'}
                />
                <CardFace 
                    value={8}
                    suit={'hearts'}
                />
                <CardFace 
                    value={9}
                    suit={'hearts'}
                />
                <CardFace 
                    value={10}
                    suit={'hearts'}
                />
                <CardFace 
                    value={'J'}
                    suit={'hearts'}
                />
                <CardFace 
                    value={'Q'}
                    suit={'hearts'}
                />
                <CardFace 
                    value={'K'}
                    suit={'hearts'}
                />
            </div>
            <div className="flex">
                <CardFace 
                    value={'A'}
                    suit={'clubs'}
                />
                <CardFace 
                    value={2}
                    suit={'clubs'}
                />
                <CardFace 
                    value={3}
                    suit={'clubs'}
                />
                <CardFace 
                    value={4}
                    suit={'clubs'}
                />
                <CardFace 
                    value={5}
                    suit={'clubs'}
                />
                <CardFace 
                    value={6}
                    suit={'clubs'}
                />
                <CardFace 
                    value={7}
                    suit={'clubs'}
                />
                <CardFace 
                    value={8}
                    suit={'clubs'}
                />
                <CardFace 
                    value={9}
                    suit={'clubs'}
                />
                <CardFace 
                    value={10}
                    suit={'clubs'}
                />
                <CardFace 
                    value={'J'}
                    suit={'clubs'}
                />
                <CardFace 
                    value={'Q'}
                    suit={'clubs'}
                />
                <CardFace 
                    value={'K'}
                    suit={'clubs'}
                />
            </div>
            <div className="flex">
                <CardFace 
                    value={'A'}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={2}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={3}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={4}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={5}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={6}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={7}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={8}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={9}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={10}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={'J'}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={'Q'}
                    suit={'diamonds'}
                />
                <CardFace 
                    value={'K'}
                    suit={'diamonds'}
                />
            </div>
            <div className="flex">
                <CardFace
                    value={'Joker'}
                    suit={'joker-black'}
                />
                <CardFace
                    value={'Joker'}
                    suit={'joker-red'} 
                />
            </div>
           
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