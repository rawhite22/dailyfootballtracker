import Player from './Player'

function PlayerList({ players }) {
  return (
    <div>{players && players.map((player) => <Player player={player} />)}</div>
  )
}
export default PlayerList
