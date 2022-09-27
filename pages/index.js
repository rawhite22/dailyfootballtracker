import { getSession } from 'next-auth/react'

import { getAllPlayers } from '../library/players'
import PlayerInfo from '../components/PlayerInfo'
export default function Home({ session, allPlayers }) {
  return (
    <main className='container'>
      <div className='player-info'>
        {allPlayers &&
          allPlayers.map((player) => (
            <PlayerInfo key={player._id} player={player} />
          ))}
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  const allPlayers = await getAllPlayers()
  console.log(session)
  if (!session) {
    return {
      props: { session, allPlayers },
    }
  }
  return {
    props: { session, allPlayers },
  }
}
