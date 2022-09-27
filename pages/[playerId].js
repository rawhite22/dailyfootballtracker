import Link from 'next/link'
import Week from '../components/Week'
import { getPlayer } from '../library/players'

function PlayerPage({ player }) {
  return (
    <div className='player-page container'>
      <h2>{player.name}</h2>
      <h3>Weekly Breakdown</h3>
      <div className='weekly-report-container'>
        {player &&
          player.weeks.map((week) => <Week key={week._id} week={week} />)}
      </div>
    </div>
  )
}
export default PlayerPage

export async function getServerSideProps(context) {
  console.log(context.params)
  const player = await getPlayer(context.params.playerId)

  return {
    props: { player },
  }
}
