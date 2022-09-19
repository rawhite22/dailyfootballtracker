import { getSession, signOut } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'

const secret = process.env.NEXTAUTH_SECRET

function Admin(props) {
  console.log(props)
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
export default Admin

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  const token = await getToken({ req: context.req, secret })
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session, token },
  }
}
