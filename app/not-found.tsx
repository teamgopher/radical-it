// Local imports
import Link from 'next/link'
import styles from './Error.module.scss'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Oops!</h2>
      <p className={styles.message}>
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <Link href="/" className={styles.link}>
        Return home
      </Link>
    </div>
  )
}