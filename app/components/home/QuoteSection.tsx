import Image, { StaticImageData } from 'next/image';
import styles from './QuoteSection.module.css';

interface Props {
  quote: string
  coverImage: StaticImageData
  coverImageAlt: string
}

const QuoteSection = ({ quote, coverImage, coverImageAlt }: Props) => {
  return (
    <section className={styles.section}>
      <Image
        src={coverImage}
        className={styles.coverImage}
        alt={coverImageAlt}
      />
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{quote}</p>
        <p className={styles.author}>- Vikki</p>
        <p className={styles.position}>Founder & CEO</p>
      </div>
    </section>
  )
}

export default QuoteSection;