// Local imports
import { services } from '../../../config/services';
import Card from './Card';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How can we help<span className={styles.colouredTitle}> you </span>today?</h2>
      <div className={styles.cards}>
        {services.map((service) => (
          <Card key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;