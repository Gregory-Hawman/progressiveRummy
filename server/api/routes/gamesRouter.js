const router = require('express').Router();
const Games = require('../models/gamesModels');

// === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === GAMES ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Game routing is working' })
// });

router.get('/', (req, res) => {
    Games.findGames()
    .then(games => {
        res.status(200).json({ games })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Games could not be retrieved',
            error: error
        });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Games.findGamesById(id)
    .then(games => {
        res.status(200).json({ games })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: `Games with ID: ${id} could not be retrieved`, 
            error: error 
        });
    });
});

router.post('/', async (req, res) => {
    const games = req.body
    let newGame

    try {
        newGame = await Games.addGames(games);
        res.status(201).json({
            message: 'Successful games data creation',
            newGame,
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Games data could not be created', 
            error: error.message,
        });
    };
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newGamesData = req.body;
    Games.updateGames(id, newGamesData)
    .then(savedGamesData => {
        res.status(200).json({
            saved: savedGamesData,
            message: `Successfully updated games ${id} data`,
            update: newGamesData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: `Games ${id} data could not be updated`, 
            error: error 
        });
    });
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Games.deleteGames(id)
    .then(deletedGames => {
      if (deletedGames) {
        res.json({ 
            removed: deletedGames
        });
      } else {
        res.status(404).json({ 
            message: `Could not find Game with given id ${id}` 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to delete Games ${id}`, err });
    });
});

module.exports = router;