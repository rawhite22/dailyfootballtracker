import { useRouter } from 'next/router'
import { useState } from 'react'
import { getPlayer } from '../../../library/players'

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

function WeekId({ player, week }) {
  const { query } = useRouter()
  console.log(query)
  const [updatedWeek, setUpdatedWeek] = useState(week[0])
  const handleSubmit = async (e, id) => {
    e.preventDefault()
    const res = await fetch('/api/editweek', {
      method: 'POST',
      body: JSON.stringify({ query, updatedWeek }),
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
  }
  const handleStatChange = (e, position, category) => {
    setUpdatedWeek((prevState) => ({
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
    <main className='container week-edit-page'>
      {' '}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='radio-win-loss'>
          <input
            type='radio'
            name='isWinTrue'
            id='isWinTrue'
            value={true}
            onChange={(e) =>
              setUpdatedWeek((prevState) => ({
                ...prevState,
                isWin: e.target.value === 'true' ? true : false,
              }))
            }
            checked={updatedWeek.isWin}
          />
          <label>Win</label>
          <input
            type='radio'
            name='isWinFalse'
            id='isWinFalse'
            value={false}
            onChange={(e) =>
              setUpdatedWeek((prevState) => ({
                ...prevState,
                isWin: e.target.value === 'false' ? false : true,
              }))
            }
            checked={!updatedWeek.isWin}
          />
          <label>Loss</label>
        </div>
        <div className='week-number'>
          <label>Week: </label>
          <select
            value={updatedWeek.week}
            onChange={(e) => {
              setUpdatedWeek((prevState) => ({
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
            value={updatedWeek.score}
            onChange={(e) =>
              setUpdatedWeek((prevState) => ({
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
              value={updatedWeek.scoringByPosition.qb.salary}
              onChange={(e) => handleStatChange(e, 'qb', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.qb.points}
              onChange={(e) => handleStatChange(e, 'qb', 'points')}
            />
          </div>
          <div className='rb1 pos-input-container'>
            <h3>RB 1</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.rb1.salary}
              onChange={(e) => handleStatChange(e, 'rb1', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.rb1.points}
              onChange={(e) => handleStatChange(e, 'rb1', 'points')}
            />
          </div>
          <div className='rb2 pos-input-container'>
            <h3>RB 2</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.rb2.salary}
              onChange={(e) => handleStatChange(e, 'rb2', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.rb2.points}
              onChange={(e) => handleStatChange(e, 'rb2', 'points')}
            />
          </div>
          <div className='wr1 pos-input-container'>
            <h3>WR 1</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.wr1.salary}
              onChange={(e) => handleStatChange(e, 'wr1', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.wr1.points}
              onChange={(e) => handleStatChange(e, 'wr1', 'points')}
            />
          </div>
          <div className='wr2 pos-input-container'>
            <h3>WR 2</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.wr2.salary}
              onChange={(e) => handleStatChange(e, 'wr2', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.wr2.points}
              onChange={(e) => handleStatChange(e, 'wr2', 'points')}
            />
          </div>
          <div className='wr3 pos-input-container'>
            <h3>WR 3</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.wr3.salary}
              onChange={(e) => handleStatChange(e, 'wr3', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.wr3.points}
              onChange={(e) => handleStatChange(e, 'wr3', 'points')}
            />
          </div>
          <div className='te pos-input-container'>
            <h3>TE</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.te.salary}
              onChange={(e) => handleStatChange(e, 'te', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.te.points}
              onChange={(e) => handleStatChange(e, 'te', 'points')}
            />
          </div>
          <div className='flex pos-input-container'>
            <h3>Flex</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.flex.salary}
              onChange={(e) => handleStatChange(e, 'flex', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.flex.points}
              onChange={(e) => handleStatChange(e, 'flex', 'points')}
            />
          </div>
          <div className='def pos-input-container'>
            <h3>Defense</h3>
            <label>Salary: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.def.salary}
              onChange={(e) => handleStatChange(e, 'def', 'salary')}
            />
            <label className='points-label-add-player'>Points: </label>
            <input
              type='number'
              value={updatedWeek.scoringByPosition.def.points}
              onChange={(e) => handleStatChange(e, 'def', 'points')}
            />
          </div>
        </div>
        <button type='submit'>Update Week</button>
      </form>
    </main>
  )
}
export default WeekId

export async function getServerSideProps(context) {
  console.log(context.params)
  const player = await getPlayer(context.params.playerId)
  const week = player.weeks.filter((week) => week._id === context.params.weekId)

  return {
    props: { player, week },
  }
}
