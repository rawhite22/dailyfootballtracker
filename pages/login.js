import { useRef, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinnerThird } from '@fortawesome/pro-solid-svg-icons'
function Login() {
  const router = useRouter()
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const enteredUsername = usernameInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const result = await signIn('credentials', {
      redirect: false,
      username: enteredUsername,
      password: enteredPassword,
    })
    if (!result.error) {
      usernameInputRef.current.value = ''
      passwordInputRef.current.value = ''
      router.replace('/admin')
    } else {
      setError(true)
      usernameInputRef.current.value = ''
      passwordInputRef.current.value = ''
      setLoading(false)
    }
  }

  return (
    <main className='sign-in-container'>
      <Header title='DFS Weekly Tracker | Admin Login' />
      <h2>Admin Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='username'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            ref={usernameInputRef}
          />
        </div>
        <div className='password'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            ref={passwordInputRef}
          />
        </div>
        {loading ? (
          <button type='submit' disabled>
            <FontAwesomeIcon rotate icon={faSpinnerThird} />
          </button>
        ) : (
          <button type='submit'>Login</button>
        )}

        {error && (
          <div className='error'>
            <p>Invalid credentials please try again.</p>
          </div>
        )}
      </form>
    </main>
  )
}
export default Login
