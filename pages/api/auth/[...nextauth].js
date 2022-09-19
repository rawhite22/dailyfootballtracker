import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { mongoConnect, mongoDisconnect } from '../../../library/mongoDB'
import User from '../../../models/userModel'
import bcrypt from 'bcryptjs'

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
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          userExists.password
        )
        await mongoDisconnect()
        if (userExists && passwordsMatch) {
          return {
            name: userExists.username,
            id: userExists.id,
          }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid
      }
      return session
    },
    jwt: async ({ user, token }) => {
      console.log(user)
      if (user) {
        token.uid = user.id
      }
      return token
    },
  },
}

export default NextAuth(authOptions)
