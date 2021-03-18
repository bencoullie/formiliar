import Head from 'next/head'
import { useForm } from 'react-hook-form'
import styles from '../styles/Form.module.css'
import { useRouter } from 'next/router'

type FormData = {
  photo: File
}

export default function PersonalDetails() {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const router = useRouter()

  const onSubmit = (data) => {
    console.log('data:', data)
    router.push('/')
  }

  console.log('errors:', errors)

  return (
    <div className={styles.container}>
      <Head>
        <title>Formiliar - Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a className={styles['back-button']} onClick={() => router.back()}>
        🔙
      </a>

      <main className={styles.main}>
        <h1 className={styles.title}>Photo!</h1>

        <p className={styles.description}>
          Now we want your face please and thank you.
        </p>

        <div className={styles.grid}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.card}>
              <h3>Favorite Wallpaper</h3>
              <p>This is very important, must be gucci!</p>
              <input
                className={errors.photo && styles.errored}
                type="file"
                name="photo"
                ref={register({ required: true })}
              />
              {errors.photo && (
                <p className={styles.helperText}>We need that photo!</p>
              )}
            </div>

            <div className={styles.card}>
              <h3>Selfy</h3>
              <p>Now give us your face.</p>
              <input
                className={errors.photo && styles.errored}
                type="file"
                name="photo"
                ref={register({ required: true })}
              />
              {errors.photo && (
                <p className={styles.helperText}>We need that photo!</p>
              )}
            </div>

            <div className={styles.card}>
              <input type="submit" className={styles.submit} value="Submit" />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
