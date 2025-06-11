// Global imports
import Image from 'next/image';
import Link from 'next/link';

// Local imports
import styles from './Services.module.scss';
import { Service } from '../../../config/services'

interface Props {
  service: Service
}

const Card = ({ service }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={service.icon} 
          alt={service.title}
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>{service.title}</h2>
      <p className={styles.description}>{service.description}</p>
      <Link href={service.link} className={styles.link}>{service.linkText}</Link>
    </div>
  )
}

export default Card;