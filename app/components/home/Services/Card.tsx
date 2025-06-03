import styles from './Services.module.scss';
import { Service } from '../../../config/services'
import Image from 'next/image';

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
      <div className={styles.content}>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.description}>{service.description}</p>
        <a href={service.link} className={styles.link}>Learn More</a>
      </div>
    </div>
  )
}

export default Card;