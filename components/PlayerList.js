import Player from './Player'

function PlayerList({ players }) {
  return (
    <section className='player-list'>
      {players.length > 0 &&
        players.map((player) => <Player key={player._id} player={player} />)}
    </section>
  )
}
export default PlayerList
