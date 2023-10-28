import Head from 'next/head'
import Image from 'next/image'
// import { Landing } from '../src/components/landing'
import Layout from '../src/components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Digital Store</title>
        <meta name="description" content="The undisputed solution in the world of concept systems." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          {/* <Landing /> */}
        </Layout>
      </main>
    </div>
  )
}
