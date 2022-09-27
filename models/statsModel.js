import { Schema, model, models } from 'mongoose'

const statsSchema = new Schema({
  name: String,
  weeks: [
    {
      isWin: Boolean,
      week: String,
      score: String,
      scoringByPosition: {
        qb: {
          salary: String,
          points: String,
        },
        rb1: {
          salary: String,
          points: String,
        },
        rb2: {
          salary: String,
          points: String,
        },
        wr1: {
          salary: String,
          points: String,
        },
        wr2: {
          salary: String,
          points: String,
        },
        wr3: {
          salary: String,
          points: String,
        },
        te: {
          salary: String,
          points: String,
        },
        flex: {
          salary: String,
          points: String,
          flexPosition: String,
        },
        def: {
          salary: String,
          points: String,
        },
      },
    },
  ],
})

const Stats = models.Stats || model('Stats', statsSchema)

export default Stats
