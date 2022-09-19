import { useState } from 'react'

function AddUser() {
  const [newUser, setNewUser] = useState({
    name: '',
    weeks: [],
  })
  return (
    <section className='add-user'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='add-user-name'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prevState) => ({ ...newUser, name: e.target.value }))
            }
          />
        </div>
        <button type='submit'>Add User</button>
      </form>
    </section>
  )
}
export default AddUser
