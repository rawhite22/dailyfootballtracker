import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
function Header() {
  const { pathname } = useRouter()
  const { data: session, status } = useSession()
  const router = useRouter()
  const handleLogout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' })
    router.push(data.url)
  }

  return (
    <header className='container header'>
      <h1>DFS Tracker</h1>
      <div className='link-container'>
        {pathname === '/admin' ? <Link href='/'>Home</Link> : null}
        {session && pathname === '/' ? <Link href='/admin'>Admin</Link> : null}
        {session ? (
          <p className='signout-link' onClick={() => handleLogout()}>
            Sign Out
          </p>
        ) : pathname === '/login' ? (
          <Link href='/'>Home</Link>
        ) : (
          <Link href='/login'>Login</Link>
        )}
        {pathname !== '/' && pathname !== '/login' && !session ? (
          <Link href='/'>Home</Link>
        ) : null}
      </div>
    </header>
  )
}
export default Header
