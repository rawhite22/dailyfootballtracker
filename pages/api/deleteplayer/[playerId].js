import { mongoConnect, mongoDisconnect } from '../../../library/mongoDB'
import Stats from '../../../models/statsModel'
import User from '../../../models/userModel'

export default async function handler(request, response) {
  try {
    if (request.method === 'DELETE') {
      console.log(request.query.playerId)
      await mongoConnect()
      let player = await Stats.findById(request.query.playerId)
      if (!player) {
        await mongoDisconnect()
        response.status(201).json({ msg: 'player not found' })
      } else {
        await Stats.findByIdAndDelete(request.query.playerId)
        await mongoDisconnect()
        response.status(200).json({ msg: 'success' })
      }
    }
  } catch (error) {
    response.status(404).json({ err: error.message })
  }
}
