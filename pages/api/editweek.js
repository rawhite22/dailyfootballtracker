import { mongoConnect, mongoDisconnect } from '../../library/mongoDB'
import { getSession } from 'next-auth/react'
import Stats from '../../models/statsModel'

export default async function handler(request, response) {
  const session = await getSession({ req: request })
  if (!session) {
    response.status(401).json({ msg: 'Not Authenticated' })
  }
  console.log(session)
  try {
    if (request.method === 'POST') {
      await mongoConnect()
      let player = await Stats.findById(request.body.query.playerId)
      console.log(request.body)
      if (!player) {
        await mongoDisconnect()
        throw new Error('Player not found')
      } else {
        const filteredWeeks = player.weeks.filter(
          (week) => week.id !== request.body.query.weekId
        )
        const updatedWeeks = [...filteredWeeks, request.body.updatedWeek]
        player.weeks = updatedWeeks
        await player.save()
        response.status(200).json({ msg: 'Success' })
      }
    }
  } catch (error) {
    console.error(error)
    response.status(404).json({ msg: 'Failed' })
  }
}

// import { mongoConnect, mongoDisconnect } from '../../library/mongoDB'
// import { getSession } from 'next-auth/react'
// import Stats from '../../models/statsModel'

// export default async function handler(request, response) {
//   const session = await getSession({ req: request })
//   if (!session) {
//     response.status(401).json({ msg: 'Not Authenticated' })
//   }
//   console.log(session)
//   try {
//     if (request.method === 'POST') {
//       await mongoConnect()
//       let player = await Stats.findById(request.body.query.playerId)
//       console.log(request.body.newWeek)
//       if (!player) {
//         await mongoDisconnect()
//         throw new Error('Player not found')
//       } else {
//         const u = [...player.weeks, request.body.newWeek]
//         player.weeks = u
//         await player.save()
//         response.status(200).json(player)
//       }
//     }
//   } catch (error) {
//     response.status(404).json({ err: error.message })
//   }
// }
