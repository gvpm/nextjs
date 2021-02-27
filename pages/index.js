import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GVPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
          Guilherme Magalhães
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="https://github.com/gvpm" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>@gvpm</p>
          </a>

          <a href="https://docs.google.com/document/d/13f1QDsAIXUPBnyalrErR0R4BP-nIRcM4SQBxYPAzucQ/edit?usp=sharing" className={styles.card}>
            <h3>CV &rarr;</h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
            <p>Check out my CV</p>

          </a>

          <a
            href="https://www.linkedin.com/in/guilhermevpm/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>@guilhermevpm</p>
          </a>

          <a
            // mailto="guilhermevpm@gmail.com"
            className={styles.card}
          >
            <h3>E-Mail</h3>
            <p>
              guilhermevpm@gmail.com
            </p>
          </a>
        </div>
      </main>
{/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
