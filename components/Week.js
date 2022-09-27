function Week({ week }) {
  return (
    <div className='weekly-report'>
      <p>Result: {week.isWin ? 'Won' : 'Lost'}</p>
      <p>Score: {week.score}</p>
      <div className='position-report'>
        <div className='qb weekly-pos'>
          <h5>QB</h5>
          <p>Salary: {week.scoringByPosition.qb.salary}</p>
          <p>Points: {week.scoringByPosition.qb.points}</p>
        </div>
        <div className='rb weekly-pos'>
          <h5>RB 1</h5>
          <p>Salary: {week.scoringByPosition.rb1.salary}</p>
          <p>Points: {week.scoringByPosition.rb1.points}</p>
        </div>
        <div className='rb weekly-pos'>
          <h5>RB 2</h5>
          <p>Salary: {week.scoringByPosition.rb2.salary}</p>
          <p>Points: {week.scoringByPosition.rb2.points}</p>
        </div>
        <div className='wr weekly-pos'>
          <h5>WR 1</h5>
          <p>Salary: {week.scoringByPosition.wr1.salary}</p>
          <p>Points: {week.scoringByPosition.wr1.points}</p>
        </div>
        <div className='wr weekly-pos'>
          <h5>WR 2</h5>
          <p>Salary: {week.scoringByPosition.wr2.salary}</p>
          <p>Points: {week.scoringByPosition.wr2.points}</p>
        </div>
        <div className='wr weekly-pos'>
          <h5>WR 3</h5>
          <p>Salary: {week.scoringByPosition.wr3.salary}</p>
          <p>Points: {week.scoringByPosition.wr3.points}</p>
        </div>
        <div className='te weekly-pos'>
          <h5>TE</h5>
          <p>Salary: {week.scoringByPosition.te.salary}</p>
          <p>Points: {week.scoringByPosition.te.points}</p>
        </div>
        <div className='def weekly-pos'>
          <h5>DEF</h5>
          <p>Salary: {week.scoringByPosition.def.salary}</p>
          <p>Points: {week.scoringByPosition.def.points}</p>
        </div>
      </div>
    </div>
  )
}
export default Week
