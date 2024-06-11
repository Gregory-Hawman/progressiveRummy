const db = require('../../data/dbConfig.js');

module.exports = {
    addGames,
    findGames,
    findGamesBy,
    findGamesById,
    updateGames,
    deleteGames,
}

function findGames() {
    return db('games')
        .select('*')
};

function findGamesBy(filter) {
    return db('games')
        .where(filter);
};

function findGamesById(id) {
    return db('games')
        .where({id})
        .first();
};

async function addGames(games) {
    const [id] = await db('games').insert(games, 'id');
    return id;
};

function updateGames(id, update) {
    return findGamesById(id).update(update);
};

function deleteGames(id) {
    return findGamesById(id).del();
};