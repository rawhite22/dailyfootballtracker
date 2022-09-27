import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import Layout from '../layout'
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={1 * 60}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
