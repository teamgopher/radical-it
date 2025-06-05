import linkedin from '../../public/icons/linkedin.png';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h2 className={styles.logo}>Radical IT</h2>
      <div className={styles.description}>
        <p>
          Radical IT is a boutique software consultancy founded in London, 2005.<br />
          We are a diverse team of experts with a shared passion for agile working<br />
          and a firm belief that meaningful work should always be fun.
        </p>
      </div>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/company/radical-it-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.iconLink}>
          <Image src={linkedin} alt="LinkedIn" width={22} height={22} className={styles.icon} />
        </a>
        <a href="mailto:info@radicalit.co.uk" className={styles.iconLink} aria-label="Email">
          <Mail className={styles.icon} size={22} />
        </a>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <span>© Radical IT Ltd {new Date().getFullYear()}</span>
      <nav className={styles.links}>
        <a href="privacy" tabIndex={0}>Privacy Policy</a>
        <a href="terms" tabIndex={0}>Terms of Service</a>
      </nav>
    </div>
  </footer>
);
export default Footer;