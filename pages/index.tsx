import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formiliar - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FAML Forms Prototype</h1>

        <p className={styles.description}>Let's do a fake form together!</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/personal-details">
              <a>✍️ Give us your personal details ✍️</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
