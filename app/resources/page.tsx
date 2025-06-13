// Local imports
import ResourceCard from '../components/resources/ResourceCard';
import { resources } from '../config/resources';
import styles from './Resources.module.scss';

export default function Resources() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resources</h1>
      <div className={styles.cards}>
        {resources.map((resource) => (
          <ResourceCard 
            key={resource.title}
            resource={resource}
          />
        ))}
      </div>
    </div>
  );
}
