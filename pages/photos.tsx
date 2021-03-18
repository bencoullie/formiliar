import Head from 'next/head'
import { useForm } from 'react-hook-form'
import styles from '../styles/Form.module.css'
import { useRouter } from 'next/router'
import Webcam from 'react-webcam'
import { useRef, useCallback, useState, ChangeEvent } from 'react'

type FormData = {
  photo: File
}

export default function PersonalDetails() {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const [selfy, setSelfy] = useState()
  const [wallpaper, setWallpaper] = useState('')
  const router = useRouter()
  const webcamRef = useRef(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setSelfy(imageSrc)
  }, [webcamRef])

  const handleWallpaperUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const wallpaper = URL.createObjectURL(event.target.files[0])
    setWallpaper(wallpaper)
  }

  const onSubmit = (data) => {
    capture()
    data.selfy = selfy
    console.log('Submitted data:', data)

    window.setTimeout(() => router.push('/?isFinished=true'), 3000)
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
          <b>Step 2</b>: Now we want your face please and thank you.
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
                onChange={(e) => handleWallpaperUpload(e)}
              />
              {errors.photo && (
                <p className={styles.helperText}>We need that photo!</p>
              )}
              {wallpaper && (
                <img
                  src={wallpaper}
                  alt="it wallpaper"
                  className={`${styles.image} ${styles.wallpaper}`}
                />
              )}
            </div>

            <div className={styles.card}>
              <h3>Selfy</h3>
              <p>Now give us your face.</p>
              {selfy ? (
                <img src={selfy} alt="it me" className={styles.image} />
              ) : (
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  className={styles.camera}
                />
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
