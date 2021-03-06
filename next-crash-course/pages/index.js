import Head from 'next/head'
import Image from 'next/image'

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}