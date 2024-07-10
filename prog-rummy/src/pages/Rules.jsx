import React from 'react'

export default function Rules() {
  return (
    <div className="rules">
        <ul>
            <h2>General Rules:</h2>
            <li>Progressive Rummy is a card game that is played with a minimum of 2 standard decks of 52 cards and 4 jokers. </li>
            <li>The game is played with 2-8 players.</li>
            <li>If you have 4+ players, the game will be played with 3 decks and 6 jokers </li>
            <li>Each player is dealt 3 cards to start the game.</li>
            <li>Each round, players are dealt 1 more card until the final round is a hand of 13 cards.</li>
            <li>Players take turns drawing a card from the deck or the discard pile.</li>
            <li>Players must match cards in their hand to create a set (3 or more of the same card value) or 4 or more cards or the same suit in a run (cards in sequential order)</li>
            <li>Aces are always low</li>
            <li>Players must use all cards in their hand to go out</li>
            <li>Players must still discard before going out</li>
        </ul>

        <ul>
            <h2>Wild Cards:</h2>
            <li>Jokers are wilds</li>
            <li>The card equal to the number of cards in your hand</li>
            <li>1st round 3's are wild, 2nd round 4's, etc</li>
        </ul>

        <ul>
            <h2>Order of Play:</h2>
            <li>Player 1 is directly to the left of the dealer and goes first and continues clockwise</li>
            <li>Players must draw a single card from the deck or the discard pile</li>
            <li>Players must discard a card from their hand after drawing</li>
            <li>Players may go out if they have a valid hand</li>
            <li>Once one player has gone out, all other players who have not gone out will get one more turn to try and do so</li>
            <li>Play continues until someone goes out, and everyone else get's one last turn and adds up their points</li>
            <li>The round ends a the dealer moves one to the left.</li>
            <li>The game is over once you play the round with 13 cards in your hand</li>
        </ul>

        <ul>
            <h2>Scoring</h2>
            <li>The first player to go out wins the round and gets 0 points</li>
            <li>Other players will have one more turn for the chance to go out as well.</li>
            <li>Players who have not gone out must count the points of the cards in their hand that are not a part of a set or run</li>
            <li>Points are as follows:</li>
            <li>Aces are worth 1 point</li>
            <li>Number cards are worth their face value</li>
            <li>Face cards are worth 10 points</li>
            <li>Jokers are worth 25 points</li>
            <li>The Wild cards of the round are also 25 points</li>
        </ul>

    </div>
  )
}
