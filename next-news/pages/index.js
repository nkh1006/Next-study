import Head from 'next/head'
import ToolBar from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>
      <ToolBar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop for the latest news articles</h3>
      </div>
    </div>
  )
}