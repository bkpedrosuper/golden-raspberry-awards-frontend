import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/the-razzies.jpg"
          alt="Golden Raspberry Awards Logo"
          width={560}
          height={300}
          priority
        /> */}
      </div>

      <div className={styles.page_title}>
        <h1>Golden Raspberry Awards</h1>
        <h3>The Website</h3>

      </div>

      <div className={styles.menus}>

        <div
          className={styles.card}
          rel="noopener noreferrer"
        >
          <Link href="/dashboard">
            <h2>
              DashBoard <span>-&gt;</span>
            </h2>
            <p>
              Find insightful informations about the Golden Raspberry Awards overall
            </p>
          </Link>
        </div>

        <div
          className={styles.card}
          rel="noopener noreferrer"
        >
          <Link href="/list">
            <h2>
              List <span>-&gt;</span>
            </h2>
            <p>
              All Golden Raspberry Award winners and nominees
            </p>
          </Link>
        </div>

      </div>
    </main>
  )
}
