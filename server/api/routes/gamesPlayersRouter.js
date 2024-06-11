const router = require('express').Router();
const GPs = require('../models/gamesPlayersModels');

// === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Games-Players routing is working' })
// });

// GET (READ)
router.get('/', (req, res) => {
    GPs.findGamesPlayers()
    .then(games_players => {
        res.status(200).json({ games_players })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Games_Players could not be retrieved',
            error: error
        });
    });
});

// One game connected to one player by main table ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    GPs.findGamesPlayersById(id)
    .then(game_player => {
        res.status(200).json({ game_player })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Games_Players could not be retrieved', 
            error: error 
        });
    });
});

// All games connected to one player
router.get('/players/:id', (req, res) => {
    const { id } = req.params;
    GPs.findGamesPlayersByPlayersId(id)
    .then(games_players => {
        res.status(200).json({ games_players })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: `Players ${id} games_players could not be retrieved`, 
            error: error 
        });
    });
});

// One Game, all players in that game
router.get('/games/:id', (req, res) => {
    const { id } = req.params;
    GPs.findGamesPlayersByGamesId(id)
    .then(games_players => {
        res.status(200).json({ games_players })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: `Games ${id} games_players could not be retrieved`, 
            error: error 
        });
    });
});

router.post('/', (req, res) => {
    const game_player = req.body
    GPs.addGamesPlayers(game_player)
    .then((newGP) => {
        res.status(201).json({
            message: 'Successful game_player creation',
            newGame: newGP
        });
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'Game data could not be updated', 
            error: error 
        });
    });
});


// PUT (UPDATE)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newGPData = req.body;
    GPs.updateGamesPlayers(id, newGPData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: `Successfully updated game_player ${id} data`,
            update: newGPData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: 'game_player data could not be updated', 
            error: error 
        });
    });
});

// DELETE (ONE SPECIFIC)
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    GPs.deleteGamesPlayers(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: `Could not find game_player with given id ${id}` 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to delete game_player ${id}`, err });
    });
});


module.exports = router;