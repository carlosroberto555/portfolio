import Head from 'next/head'

import Layout from '../components/Layout'
import TextAutoType from '../components/TextAutoType'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/fonts/fonts.css"/>
        <title>Carlos RPJ | Dev FullStack and Mobile</title>
      </Head>
      <header>
        <h1>Carlos RPJ</h1>
        <TextAutoType tag='h2'>{'<dev fullstack & mobile />'}</TextAutoType>
      </header>
      <nav>
        <a href='https://github.com/carlosroberto555' target='_blank'>GitHub</a>
        <a href='https://www.linkedin.com/in/carlosroberto555' target='_blank'>LinkedIn</a>
        <a href='https://twitter.com/carlosrpj555' target='_blank'>Twitter</a>
        <a href='https://www.instagram.com/carlos.tsx' target='_blank'>Instagram</a>
      </nav>
    </Layout>
  )
}
