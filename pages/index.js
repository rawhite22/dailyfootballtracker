import { getSession, signIn } from 'next-auth/react'
import { useRef } from 'react'
import { useRouter } from 'next/router'
export default function Home({ session }) {
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
    <main>
      <div className='signInContainer'>
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
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  console.log(session)
  if (!session) {
    return {
      props: { session },
    }
  }
  return {
    props: { session },
  }
}
