import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formiliar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FAML Forms Prototype</h1>

        <p className={styles.description}>Let's do a fake form together!</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Name</h3>
            <p>Full name (including middle names).</p>
            <input type="text" />
          </div>

          <div className={styles.card}>
            <h3>Email</h3>
            <p>Please provide a legitimate email address.</p>
            <input type="email" />
          </div>

          <div className={styles.card}>
            <h3>Age</h3>
            <p>How old are you? Must be over 18.</p>
            <input type="number" />
          </div>

          <div className={styles.card}>
            <h3>Money Laundered</h3>
            <p>
              Amount of money you've successfully laundered in your lifetime.
            </p>
            <input
              className={styles.slider}
              type="range"
              min="0"
              max="1000000"
            />
          </div>

          <div className={styles.card}>
            <button className={styles.submit}>Submit &rarr;</button>
            <button className={styles.cancel}>Cancel</button>
          </div>
        </div>
      </main>
    </div>
  )
}
