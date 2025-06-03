'use client';
import styles from './HomeHero.module.scss';

const HomeHero = () => {
  return (
    <div>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src={'/videos/arup.mp4'} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>We&apos;ve cracked the code</h1>
          <p className={styles.tagline}>Innovation thrives when you engage in meaningful work and make it fun.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHero;