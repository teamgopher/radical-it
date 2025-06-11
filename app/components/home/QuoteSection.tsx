// Global imports
import Image from 'next/image';

// Local imports
import { Quote } from '@/app/config/quotes';
import styles from './QuoteSection.module.scss';

interface QuoteSectionProps {
  quote: Quote;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => (
  <section className={styles.section}>
    <div className={styles.imageWrapper}>
      <Image
        src={quote.imageUrl}
        alt=""
        fill
        priority
        className={styles.backgroundImage}
        sizes="100vw"
      />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.quoteMark} aria-hidden>“</div>
            <p className={styles.quote}>{quote.quote}”</p>
          </div>
          <div className={styles.right}>
            <div className={styles.name}>{quote.name}</div>
            <div className={styles.title}>{quote.title}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuoteSection;