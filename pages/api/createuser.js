import { mongoConnect, mongoDisconnect } from '../../library/mongoDB'
import User from '../../models/userModel'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
      await mongoConnect()
      const user = await User.create({ username, password: hashedPassword })
      await mongoDisconnect()
      res.status(201).json({ user })
    } catch (error) {
      console.log(error)
      res.stats(400).json({ error })
    }
  } else {
    res
      .status(400)
      .json({ msg: '"GET" requests are not authorized for this endpoint' })
  }
}
