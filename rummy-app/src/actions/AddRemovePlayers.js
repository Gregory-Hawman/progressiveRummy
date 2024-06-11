// need to add the functionality of actually removing players from the player_list instead of just changing the player count.
export default function AddRemovePlayers (action, {playerCount}, {setPlayerCount}) {
    if (action === 'add'){
        if ( playerCount === 8){
          return null
        } else {
          setPlayerCount(playerCount + 1)
        }
    } else if (action === 'remove'){
        if (playerCount === 2){
            return null
          } else {
            setPlayerCount(playerCount - 1)
          }
    } else {
        return null
    }
  };

