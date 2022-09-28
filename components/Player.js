import { useRouter } from 'next/router'
function Player({ player }) {
  const { push } = useRouter()

  return (
    <div key={player._id} className='player-admin'>
      <p>{player.name}</p>
      <button
        className='edit-player-btn'
        onClick={() => push(`/admin/${player._id}`)}>
        Edit Player
      </button>
    </div>
  )
}
export default Player
