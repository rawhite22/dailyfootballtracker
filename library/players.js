import { mongoConnect, mongoDisconnect } from '../library/mongoDB'
import Stats from '../models/statsModel'

export async function getAllPlayers() {
  try {
    await mongoConnect()
    const players = await Stats.find()
    await mongoDisconnect()
    const allPlayers = JSON.parse(JSON.stringify(players))
    return allPlayers
  } catch (error) {
    return error.message
  }
}

export async function getPlayer(id) {
  try {
    await mongoConnect()
    const player = await Stats.findById(id)
    if (!player) {
      throw new Error('User not found')
    }
    return JSON.parse(JSON.stringify(player))
  } catch (error) {
    return error.message
  }
}

export async function getWeek(pid, weekid) {
  try {
    await mongoConnect()
    const player = await Stats.findById(pid)
    if (!player) {
      throw new Error('User not found')
    }

    return JSON.parse(JSON.stringify(player))
  } catch (error) {
    return error.message
  }
}
