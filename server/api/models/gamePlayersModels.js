const db = require('../../data/dbConfig.js');

module.exports = {
    addGamesPlayers,
    findGamesPlayers, // All Games, All Players
    findGamesPlayersByGamesId, // All the Players in one game
    findGamesPlayersByPlayersId, // All the games for one player
    findGamesPlayersById, // One Game One Player
    updateGamesPlayers,
    deleteGamesPlayers
}

// All games with all player connections
function findGamesPlayers() {
    return db('games_players').select('*')
};

function findGamesPlayersById(id) {
    return db('games_players').where({ id }).first();
};

// All games connected to one player
function findGamesPlayersByPlayersId(id) {
    return db('games_players').select('*').where('players_id', id);
};

// One game, All players in that Game
function findGamesPlayersByGamesId(id) {
    return db('games_players').select('*').where('games_id', id);
};

async function addGamesPlayers(game) {
    const [id] = await db('games_players').insert(game, 'id');
    return findGamesPlayersById(id);
};

function updateGamesPlayers(id, update) {
    return findGamesPlayersById(id).update(update);
}

function deleteGamesPlayers(id) {
    return findGamesPlayersById(id).del();
};