import { useState } from 'react'
import axios from 'axios'

const expCheck = (tokenExp) => {
  let currTime = Math.floor(new Date().getTime() / 1000.0)
  if (currTime > tokenExp) {
    return true
  } else {
    return false
  }
}

function AddPlayer({ token, setPlayers }) {
  const [newUser, setNewUser] = useState({
    name: '',
    weeks: [],
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const expired = expCheck(token.exp)
    setError(false)
    setLoading(true)
    if (expired) {
      setLoading(false)
      console.log('session expired')
    } else {
      const res = await fetch('/api/addplayer', {
        method: 'POST',
        body: JSON.stringify({ name: newUser.name }),
        headers: {
          authorization: `Bearer ${token.uid}`,
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      if (data.name) {
        setPlayers((prevState) => [...prevState, data])
        setNewUser((prevState) => ({ ...prevState, name: '' }))
        setLoading(false)
      } else {
        setLoading(false)
        setError(true)
      }
    }
  }
  return (
    <section className='add-user'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='add-user-name'>
          <div className='label-container'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              value={newUser.name}
              onChange={(e) =>
                setNewUser((prevState) => ({
                  ...newUser,
                  name: e.target.value,
                }))
              }
            />
          </div>
        </div>
        {loading ? (
          <button disabled className='add-new-player-btn' type='submit'>
            Adding User
          </button>
        ) : (
          <button className='add-new-player-btn' type='submit'>
            Add User
          </button>
        )}

        {error && <p className='error'>Something went wrong...</p>}
      </form>
    </section>
  )
}
export default AddPlayer
