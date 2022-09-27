import { useRouter } from 'next/router'
function Player({ player }) {
  const { push } = useRouter()

  return (
    <div key={player._id}>
      <p>{player.name}</p>
      <button onClick={() => push(`/admin/${player._id}`)}>Edit Player</button>
    </div>
  )
}
export default Player
