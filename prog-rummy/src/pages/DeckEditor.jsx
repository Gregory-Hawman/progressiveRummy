import React, { useEffect, useState } from 'react'
import CardFace from '../components/CardFace'

export default function DeckEditor() {
    const [singleDeck, setSingleDeck] = useState([])
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
    const jokers = ['joker-black', 'joker-red'];

    function Deck() {
        let organizedDeck = {spades: [], hearts: [], clubs: [], diamonds: [], jokers: []}
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                organizedDeck[suits[j]].push({value: values[i], suit: suits[j]})
            }
        }
        for (let i = 0; i < jokers.length; i++) {
            organizedDeck.jokers.push({value: 'Joker', suit: jokers[i]})
        }
        setSingleDeck(organizedDeck)
    }

    useEffect(() => {
        Deck();
    }, []);

    return (
        <div className="deck-editor">
            <h1>Deck Editor</h1>
            {Object.keys(singleDeck).map((suit) => (
                <div key={suit} className="deck-row">
                    <h2>{suit.charAt(0).toUpperCase() + suit.slice(1)}</h2>
                    <div className="deck">
                        {singleDeck[suit].map((card, index) => (
                            <CardFace key={index} value={card.value} suit={card.suit} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
