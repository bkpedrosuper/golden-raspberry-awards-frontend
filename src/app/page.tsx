import styles from './page.module.css'
import Link from 'next/link'
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <main className={styles.main}>

      {/* <div className={styles.center}>
      </div> */}

      <div className={styles.page_title}>
        <h1>Golden Raspberry Awards</h1>
        <h3>The Website</h3>

      </div>

      <Grid container spacing={8} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
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

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
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

        </Grid>
        
      </Grid>

    </main>
  )
}
