import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <h1>Prog Rummy</h1>
            <ul className='flex'>
            <li onClick={() => navigate('/')}>Home</li> {/* Step 3 */}
            <li onClick={() => navigate('/rules')}>Rules</li>
            <li onClick={() => navigate('/current-game')}>Current Game</li>
            <li onClick={() => navigate('/game-setup')}>New Game</li>
            <li onClick={() => navigate('/deck-editor')}>Customize Deck</li>
            <li onClick={() => navigate('/github')}>GitHub</li>
            </ul>
        </nav>
  )
}