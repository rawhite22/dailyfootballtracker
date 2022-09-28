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
  const handleSubmit = async (e) => {
    e.preventDefault()
    const expired = expCheck(token.exp)
    if (expired) {
      console.log('session expired')
    } else {
      const res = await axios.post(
        '/api/addplayer',
        { name: newUser.name },
        {
          headers: {
            authorization: `Bearer ${token.uid}`,
          },
        }
      )
      console.log(res.status)
      setPlayers((prevState) => [...prevState, res.data])
    }
  }
  const handleSubmitf = async (e) => {
    e.preventDefault()
    const expired = expCheck(token.exp)
    if (expired) {
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
      setPlayers((prevState) => [...prevState, data])
    }
  }
  return (
    <section className='add-user'>
      <form onSubmit={(e) => handleSubmitf(e)}>
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
        <button className='add-new-player-btn' type='submit'>
          Add User
        </button>
      </form>
    </section>
  )
}
export default AddPlayer
