import { useRef } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
function Login() {
  const router = useRouter()
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const enteredUsername = usernameInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const result = await signIn('credentials', {
      redirect: false,
      username: enteredUsername,
      password: enteredPassword,
    })
    if (!result.error) {
      // set some auth state
      router.replace('/admin')
    }
  }

  return (
    <main className='sign-in-container'>
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
        <button type='submit'>Login</button>
      </form>
    </main>
  )
}
export default Login
