const db = require('../../data/dbConfig.js');

module.exports = {
    addScores,
    findScores,
    findScoresBy,
    findScoresById,
    updateScores,
    deleteScores,
}

function findScores() {
    return db('scores')
        .select('*')
};

function findScoresBy(filter) {
    return db('scores')
        .where(filter);
};

function findScoresById(id) {
    return db('scores')
        .where({id})
        .first();
};

async function addScores(scores) {
    const [id] = await db('scores').insert(scores, 'id');
    return id;
};

function updateScores(id, update) {
    return db('scores')
    .where({ id })
    .update(update);
};

function deleteScores(id) {
    return findScoresById(id).del();
};