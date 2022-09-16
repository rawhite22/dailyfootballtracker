import { Schema, model, models } from 'mongoose'

const statsSchema = new Schema([
  {
    name: String,
    weeks: [
      {
        isWin: Boolean,
        week: Number,
        score: Number,
        scoringByPosition: {
          qb: {
            salary: Number,
            points: Number,
          },
          rb1: {
            salary: Number,
            points: Number,
          },
          rb2: {
            salary: Number,
            points: Number,
          },
          wr1: {
            salary: Number,
            points: Number,
          },
          wr2: {
            salary: Number,
            points: Number,
          },
          wr3: {
            salary: Number,
            points: Number,
          },
          te: {
            salary: Number,
            points: Number,
          },
          flex: {
            salary: Number,
            points: Number,
            flexPosition: String,
          },
          def: {
            salary: Number,
            points: Number,
          },
        },
      },
    ],
  },
])

const Stats = models.Stats || model('Stats', statsSchema)

export default Stats
