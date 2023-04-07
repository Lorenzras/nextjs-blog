import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Lenz. I'm a software engineer and a translator (English/Japanese).
          You can contact me on <a href="https://twitter.com/lenz_">Twitter</a>.
        </p>
        <p>
          This is my first Nextjs 13 app. I love technology, and I like documenting how I learned them.
        </p>
      </section>
    </Layout>
  );
}