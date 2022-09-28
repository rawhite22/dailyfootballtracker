import Head from 'next/head'

function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='Weekly Draftkings fantasy football tracker. Track how your spending vs points gained relates. Track each positions average to see where your team can improve.'
      />
      <meta
        name='keywords'
        content='Daily Fantasy Football , DraftKings, Stats '
      />
      <meta name='author' content='Robert White' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  )
}
export default Header
