import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { toast, ToastContainer } from 'react-nextjs-toast'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const { isFinished } = router.query

  useEffect(() => {
    isFinished &&
      toast.notify('All done. Celebrate with a ☕!', {
        position: 'top',
        title: 'Success!',
      })
    router.replace('/')
  }, [isFinished])

  return (
    <div className={styles.container}>
      <Head>
        <title>Formiliar - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:lang" content="en" key="lang" />
      </Head>

      <ToastContainer position={'top'} />

      <main className={styles.main}>
        <h1 className={styles.title}>NextJS Forms Prototype</h1>

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
