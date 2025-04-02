import Header from './components/Header';
import HomeHero from './components/HomeHero';
import LogoSlider from './components/LogoSlider';
import { privateLogos, publicLogos } from './config/logos';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeHero />
      <div className={styles.trustedPartners}>
        <h1 className={styles.title}>Trusted By</h1>
        <div className={styles.logoSliders}>
          <LogoSlider logos={privateLogos} />
          <LogoSlider logos={publicLogos} />
        </div>
        <section></section>
      </div>
    </div>
  );
}
