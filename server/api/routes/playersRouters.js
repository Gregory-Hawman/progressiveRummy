const router = require('express').Router();
const Players = require('../models/playersModels');

// === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === USER ROUTERS === //
// TEST 
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Player routing is working' })
// });

router.get('/', (req, res) => {
    Players.findPlayers()
    .then(players => {
        res.status(200).json({ players })
    })
    .catch((error) => {
        res.status(500).json({
            message: 'Players could not be retrieved',
            error: error
        });
    });
}); 

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Players.findPlayersById(id)
    .then(players => {
        res.status(200).json({ players })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: `Players ID: ${id} could not be retrieved`, 
            error: error 
        });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newPlayersData = req.body;
    Players.updatePlayers(id, newPlayersData)
    .then(saved => {
        res.status(200).json({
            saved: saved,
            message: `Successfully updated Players ${id} data`,
            update: newData
        })
    })
    .catch((error) => {
        res.status(500).json({ 
            message: `Player ${id} data could not be updated`, 
            error: error 
        });
    });
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;

    Players.deletePlayers(id)
    .then(deleted => {
      if (deleted) {
        res.json({ 
            removed: deleted 
        });
      } else {
        res.status(404).json({ 
            message: 'Could not find Player with given id' 
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete Player', err });
    });
});

module.exports = router;