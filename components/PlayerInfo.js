import Link from 'next/link'
import { useState } from 'react'

const avg = (weeks, type, pos) => {
  if (!pos) {
    let scoringArr = weeks.map((week) => Number(week[type]))

    let score = scoringArr.reduce((curr, prev) => prev + curr) / weeks.length
    return Number(score.toFixed(2))
  }
  if (pos === 'rb') {
    let rb1Arr = weeks.map((week) => Number(week.scoringByPosition.rb1[type]))
    let rb2Arr = weeks.map((week) => Number(week.scoringByPosition.rb2[type]))
    let totals = [...rb1Arr, ...rb2Arr]
    let score = totals.reduce((curr, prev) => prev + curr) / weeks.length
    return Number(score.toFixed(2))
  }
  if (pos === 'wr') {
    let wr1Arr = weeks.map((week) => Number(week.scoringByPosition.wr1[type]))
    let wr2Arr = weeks.map((week) => Number(week.scoringByPosition.wr2[type]))
    let wr3Arr = weeks.map((week) => Number(week.scoringByPosition.wr3[type]))
    let totals = [...wr1Arr, ...wr2Arr, ...wr3Arr]
    let score = totals.reduce((curr, prev) => prev + curr) / weeks.length
    return Number(score.toFixed(2))
  } else {
    let totalsArr = weeks.map((week) =>
      Number(week.scoringByPosition[pos][type])
    )

    let score = totalsArr.reduce((curr, prev) => prev + curr) / weeks.length
    return Number(score.toFixed(2))
  }
}

function PlayerInfo({ player }) {
  const [data] = useState({
    qb: {
      score: avg(player.weeks, 'points', 'qb'),
      salary: avg(player.weeks, 'salary', 'qb').toFixed(0),
    },
    rb: {
      score: avg(player.weeks, 'points', 'rb'),
      salary: avg(player.weeks, 'salary', 'rb').toFixed(0),
    },
    wr: {
      score: avg(player.weeks, 'points', 'wr'),
      salary: avg(player.weeks, 'salary', 'wr').toFixed(0),
    },
    te: {
      score: avg(player.weeks, 'points', 'te'),
      salary: avg(player.weeks, 'salary', 'te').toFixed(0),
    },
    flex: {
      score: avg(player.weeks, 'points', 'flex'),
      salary: avg(player.weeks, 'salary', 'flex').toFixed(0),
    },
    def: {
      score: avg(player.weeks, 'points', 'def'),
      salary: avg(player.weeks, 'salary', 'def').toFixed(0),
    },
  })
  return (
    <div className='player-info-individual'>
      <h2 className='player-name'>{player.name}</h2>
      <Link href={`/${player._id}`}>More Info</Link>
      <p className='total-score'>
        Average total score {avg(player.weeks, 'score', null)}
      </p>
      <div className='stats-info'>
        <div className='label-container'>
          <h4>Position</h4>
        </div>
        <div className='label-container'>
          {' '}
          <h4>Points Average</h4>
        </div>
        <div className='label-container'>
          {' '}
          <h4>Salary Average</h4>
        </div>

        <div className='label-container'>
          <h4 className='qb-label label'>QB</h4>
        </div>
        <div className='score-container'>
          <p className='label'>{data.qb.score}</p>
          <div
            className={`score-indicator ${
              data.qb.score > 20
                ? 'good'
                : data.qb.score < 15
                ? 'bad'
                : 'below-average'
            }`}></div>
        </div>
        <div className='salary-container'>
          {' '}
          <p className='label'>${data.qb.salary}</p>
        </div>
        <div className='label-container'>
          <h4 className='rb-label label'>RBs</h4>
        </div>
        <div className='score-container'>
          <p className='label'>{data.rb.score}</p>
          <div
            className={`score-indicator ${
              data.rb.score > 40
                ? 'good'
                : data.rb.score < 35
                ? 'bad'
                : 'below-average'
            }`}></div>
        </div>
        <div className='salary-container'>
          <p className='label'>${data.rb.salary}</p>
        </div>
        <div className='label-container'>
          <h4 className='wr-label label'>WRs</h4>
        </div>
        <div className='score-container'>
          <p className='label'>{data.wr.score}</p>
          <div
            className={`score-indicator ${
              data.wr.score > 60
                ? 'good'
                : data.wr.score < 50
                ? 'bad'
                : 'below-average'
            }`}></div>
        </div>
        <div className='salary-container'>
          <p className='label'>${data.wr.salary}</p>
        </div>
        <div className='label-container'>
          <h4 className='flex-label label'>TE</h4>
        </div>
        <div className='score-container'>
          <p className='label'>{data.te.score}</p>
          <div
            className={`score-indicator ${
              data.te.score > 20
                ? 'good'
                : data.te.score < 15
                ? 'bad'
                : 'below-average'
            }`}></div>
        </div>
        <div className='salary-container'>
          <p className='label'>${data.te.salary}</p>
        </div>
        <div className='label-container'>
          <h4 className='flex-label label'>Flex</h4>
        </div>
        <div className='score-container'>
          <p className='label'>{data.flex.score}</p>
          <div
            className={`score-indicator ${
              data.flex.score > 20
                ? 'good'
                : data.flex.score < 15
                ? 'bad'
                : 'below-average'
            }`}></div>
        </div>
        <div className='salary-container'>
          <p className='label'>${data.flex.salary}</p>
        </div>
        <div className='label-container'>
          <h4 className='def-label label'>Defense</h4>
        </div>
        <div className='score-container'>
          {' '}
          <p className='label'>{data.def.score}</p>
          <div
            className={`score-indicator ${
              data.def.score > 9
                ? 'good'
                : data.def.score < 7
                ? 'bad'
                : 'below-average'
            }`}></div>
        </div>
        <div className='salary-container'>
          <p className='label'>${data.def.salary}</p>
        </div>
      </div>
    </div>
  )
}
export default PlayerInfo
