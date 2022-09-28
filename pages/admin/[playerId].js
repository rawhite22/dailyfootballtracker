import { getSession, signOut } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
const secret = process.env.NEXTAUTH_SECRET

const options = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
  { label: '11', value: 11 },
  { label: '12', value: 12 },
  { label: '13', value: 13 },
  { label: '14', value: 14 },
  { label: '15', value: 15 },
  { label: '16', value: 16 },
  { label: '17', value: 17 },
  { label: '18', value: 18 },
]
function Player(props) {
  const [newWeek, setNewWeek] = useState({
    isWin: false,
    week: 1,
    score: 0,
    scoringByPosition: {
      qb: {
        salary: 0,
        points: 0,
      },
      rb1: {
        salary: 0,
        points: 0,
      },
      rb2: {
        salary: 0,
        points: 0,
      },
      wr1: {
        salary: 0,
        points: 0,
      },
      wr2: {
        salary: 0,
        points: 0,
      },
      wr3: {
        salary: 0,
        points: 0,
      },
      te: {
        salary: 0,
        points: 0,
      },
      flex: {
        salary: 0,
        points: 0,
        flexPosition: '',
      },
      def: {
        salary: 0,
        points: 0,
      },
    },
  })
  const { query } = useRouter()

  const handleSubmit = async (e, id) => {
    e.preventDefault()
    const res = await fetch('/api/addnewweek', {
      method: 'POST',
      body: JSON.stringify({ query, newWeek }),
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
  }
  const handleStatChange = (e, position, category) => {
    setNewWeek((prevState) => ({
      ...prevState,
      scoringByPosition: {
        ...prevState.scoringByPosition,
        [position]: {
          ...prevState.scoringByPosition[position],
          [category]: e.target.value,
        },
      },
    }))
  }
  return (
    <main className='player-edit-page container'>
      <nav>
        <Link href={'/admin'}>Players list...</Link>
      </nav>

      <h3 className='new-week'>Add new week</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='radio-win-loss'>
          <input
            type='radio'
            name='isWinTrue'
            id='isWinTrue'
            value={true}
            onChange={(e) =>
              setNewWeek((prevState) => ({
                ...prevState,
                isWin: e.target.value === 'true' ? true : false,
              }))
            }
            checked={newWeek.isWin}
          />
          <label>Win</label>
          <input
            type='radio'
            name='isWinFalse'
            id='isWinFalse'
            value={false}
            onChange={(e) =>
              setNewWeek((prevState) => ({
                ...prevState,
                isWin: e.target.value === 'false' ? false : true,
              }))
            }
            checked={!newWeek.isWin}
          />
          <label>Loss</label>
        </div>
        <div className='week-number'>
          <label>Week: </label>
          <select
            value={newWeek.week}
            onChange={(e) => {
              setNewWeek((prevState) => ({
                ...prevState,
                week: e.target.value,
              }))
            }}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className='total-score'>
          <label>Total Score: </label>
          <input
            type='number'
            value={newWeek.score}
            onChange={(e) =>
              setNewWeek((prevState) => ({
                ...prevState,
                score: e.target.value,
              }))
            }
          />
        </div>
        <div className='position-info'>
          <div className='qb pos-input-container'>
            <h3>QB</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.qb.salary}
              onChange={(e) => handleStatChange(e, 'qb', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.qb.points}
              onChange={(e) => handleStatChange(e, 'qb', 'points')}
            />
          </div>
          <div className='rb1 pos-input-container'>
            <h3>RB 1</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.rb1.salary}
              onChange={(e) => handleStatChange(e, 'rb1', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.rb1.points}
              onChange={(e) => handleStatChange(e, 'rb1', 'points')}
            />
          </div>
          <div className='rb2 pos-input-container'>
            <h3>RB 2</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.rb2.salary}
              onChange={(e) => handleStatChange(e, 'rb2', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.rb2.points}
              onChange={(e) => handleStatChange(e, 'rb2', 'points')}
            />
          </div>
          <div className='wr1 pos-input-container'>
            <h3>WR 1</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.wr1.salary}
              onChange={(e) => handleStatChange(e, 'wr1', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.wr1.points}
              onChange={(e) => handleStatChange(e, 'wr1', 'points')}
            />
          </div>
          <div className='wr2 pos-input-container'>
            <h3>WR 2</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.wr2.salary}
              onChange={(e) => handleStatChange(e, 'wr2', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.wr2.points}
              onChange={(e) => handleStatChange(e, 'wr2', 'points')}
            />
          </div>
          <div className='wr3 pos-input-container'>
            <h3>WR 3</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.wr3.salary}
              onChange={(e) => handleStatChange(e, 'wr3', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.wr3.points}
              onChange={(e) => handleStatChange(e, 'wr3', 'points')}
            />
          </div>
          <div className='te pos-input-container'>
            <h3>TE</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.te.salary}
              onChange={(e) => handleStatChange(e, 'te', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.te.points}
              onChange={(e) => handleStatChange(e, 'te', 'points')}
            />
          </div>
          <div className='flex pos-input-container'>
            <h3>Flex</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.flex.salary}
              onChange={(e) => handleStatChange(e, 'flex', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.flex.points}
              onChange={(e) => handleStatChange(e, 'flex', 'points')}
            />
          </div>
          <div className='def pos-input-container'>
            <h3>Defense</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.def.salary}
              onChange={(e) => handleStatChange(e, 'def', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={newWeek.scoringByPosition.def.points}
              onChange={(e) => handleStatChange(e, 'def', 'points')}
            />
          </div>
        </div>
        <button type='submit'>Add Week</button>
      </form>
    </main>
  )
}
export default Player

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
