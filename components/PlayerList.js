import Player from './Player'

function PlayerList({ players }) {
  return (
    <div>
      {players.length > 0 &&
        players.map((player) => <Player key={player._id} player={player} />)}
    </div>
  )
}
export default PlayerList
