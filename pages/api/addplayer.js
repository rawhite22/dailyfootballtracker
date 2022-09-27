import { mongoConnect, mongoDisconnect } from '../../library/mongoDB'
import Stats from '../../models/statsModel'
import User from '../../models/userModel'

export default async function handler(request, response) {
  try {
    if (request.method === 'POST') {
      if (request.body.name === '') {
        throw new Error('Enter a players name.')
      }
      console.log(request.body)
      await mongoConnect()
      let player = await Stats.findOne({ name: request.body.name })
      if (!player) {
        player = await Stats.create({ name: request.body.name })
        await mongoDisconnect()
        response.status(201).json(player)
      } else {
        throw new Error('PLayers name must be unique')
      }
    }
  } catch (error) {
    response.status(404).json({ err: error.message })
  }
}
