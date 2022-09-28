import { getSession, signOut } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'
import AddPlayer from '../../components/AddPlayer'
import PlayerList from '../../components/PlayerList'
import { useEffect, useState } from 'react'
import { getAllPlayers } from '../../library/players'
import Link from 'next/link'

const secret = process.env.NEXTAUTH_SECRET

function Admin(props) {
  const [players, setPlayers] = useState(props.allPlayers)
  return (
    <main className='admin-page container'>
      <h2 className='current-players-title'>Add New Player</h2>
      <AddPlayer token={props.token} setPlayers={setPlayers} />
      <h2 className='current-players-title'>Current Players</h2>
      <PlayerList players={players} />
    </main>
  )
}
export default Admin

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  const token = await getToken({ req: context.req, secret })
  const allPlayers = await getAllPlayers()

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session, token, allPlayers },
  }
}
