import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! This is a sample website I'm using to learn Next.js. If you'd like to connect, follow me on <a href="https://twitter.com/JshuaETH">Twitter</a>.</p>
      </section>
    </Layout>
  )
}