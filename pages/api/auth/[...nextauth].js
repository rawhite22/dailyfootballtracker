import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { mongoConnect, mongoDisconnect } from '../../../library/mongoDB'
import User from '../../../models/userModel'

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await mongoConnect()
        const userExists = await User.findOne({
          username: credentials.username,
        })
        if (userExists) {
          return {
            name: userExists.username,
          }
        } else {
          return null
        }
      },
    }),
  ],
}
