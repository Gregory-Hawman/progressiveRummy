import React from 'react';
import AddRemovePlayers from '../actions/AddRemovePlayers';
import ReadyUp from '../actions/ReadyUp';

export default function GameSetup(props) {
    const less = '<'
    const more = '>'

    return (
        <div>
            {props.playerAmountSelected ? 
                null : 
                <div>
                    <h2>How many Players?</h2>
                    <button onClick={() => AddRemovePlayers('remove', props.playerCount, props.setPlayerCount)}> {less} </button>
                    {props.playerCount}
                    <button onClick={() => AddRemovePlayers('add', props.playerCount, props.setPlayerCount)}> {more} </button>
                    <button onClick={() => ReadyUp(props.playerAmountSelected, props.setPlayerAmountSelected, props.playerCount, props.setDeckCount)}>Ready?</button>
                </div>
            }
        </div>
    )
};
