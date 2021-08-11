import React from 'react';
import playersList from '../App';

let playersCopy = playersList
console.log(playersCopy)
export let playablePlayers = []

function Players ({playerCount}) {
    let playersCopy = playersList
    let playablePlayers = [];
    
    for (let i=0; i < playerCount; i++){
        playablePlayers.push(playersCopy[i])
    }
  
    return (
        <div className='players'>
        {playablePlayers.map((player, index) => {
            return (
            <div key={index}>
                {player.currentPlayer ? "Current Player" : null}
                <h3>{player.name}</h3>
                <h4>Hand</h4>
                <p>{player.hand}</p>
                {player.currentPlayer ? <button onClick={EndTurn}>End Turn</button> : null}
            </div>
            )
        })}
        </div>
    )
  };

export default Players;