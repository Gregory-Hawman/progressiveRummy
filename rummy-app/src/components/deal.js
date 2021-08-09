import React from 'react';
import '..//App.css';

//assuming 4 players on first hand for now.
function DealCards({drawPile, deckCount, setDeckCount, playerCount, round, setRound}) {
    // while loop (while i < the rounds) so as long as it less that the rounds it keeps dealing cards to each player
    // take top card from drawPile and give it to player 1
    // decrement deckCount
    // take top card from drawPile and give it to player 2
    // decrement deckCount

    // let hands = []
    // hands.fill([], 0, playerCount)
    // console.log('HANDS',hands);

    let c = 0 // cards this round
    // deal cards to players for the current round they are on
    while (c < round) {
        // individual deal a card, go to next player, everyones card count goes up +1
        for (let i = 0; i < playerCount; i++) {
            let dealCard = drawPile.shift();


        }
        c++
    }

    return (
        <div className='players'>

        </div>
    )
};

export default DealCards