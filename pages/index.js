import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slothie Studio</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Slothie Studio</h1>
        <h3 className={styles.subTitle}>🦥 Martina & Guido 🦥</h3>
      </main>

    </div>
  )
}
