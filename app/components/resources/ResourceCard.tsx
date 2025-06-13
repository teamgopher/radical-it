// Global imports
import Image from 'next/image';

// Local imports
import styles from './ResourceCard.module.scss';
import { Resource } from '../../config/resources';
import { Download } from 'lucide-react';

interface Props {
  resource: Resource
}

const ResourceCard = ({ resource }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image 
          src={resource.image} 
          alt={resource.title}
          fill
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>{resource.title}</h2>
      <a href={resource.link} className={styles.link} download>
        <Download className={styles.icon} />
        Download
      </a>
    </div>
  )
}

export default ResourceCard;