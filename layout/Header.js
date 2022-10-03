import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faRightFromBracket } from '@fortawesome/pro-solid-svg-icons'
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
      <div className='links-container'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          {session ? (
            <li>
              <Link href='/admin'>Admin</Link>
            </li>
          ) : null}
          {session ? (
            <li>
              <p className='signout-link' onClick={() => handleLogout()}>
                <FontAwesomeIcon
                  className='admin-icon'
                  icon={faRightFromBracket}
                />
              </p>
            </li>
          ) : (
            <li>
              <Link href='/login'>
                <FontAwesomeIcon className='admin-icon' icon={faLock} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}
export default Header
