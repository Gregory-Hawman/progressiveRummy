const db = require('../../data/dbConfig.js');

module.exports = {
    addPlayers,
    findPlayers,
    findPlayersBy,
    findPlayersById,
    updatePlayers,
    deletePlayers
}

function findPlayers() {
    return db('players');
};

function findPlayersBy(column, value) {
    return db('players').where(column, value).first();
};

function findPlayersById(id) {
    return db('players').where({ id }).first();
};

async function addPlayers(players) {
    const [id] = await db('players').insert(players, 'id');
    return findPlayersById(id);
};

function updatePlayers(id, newPlayersData) {
    return findPlayersById(id).update(newPlayersData);
};

function deletePlayers(id) {
    return findPlayersById(id).del();
};