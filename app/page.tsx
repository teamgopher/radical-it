import Header from './components/Header';
import HomeHero from './components/home/HomeHero';
import LogoSlider from './components/home/LogoSlider';
import Services from './components/home/Services';
import { privateLogos, publicLogos, badges } from './config/logos';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <Header transparent />
      <HomeHero />
      <section className={styles.trustedPartners}>
        <h1 className={styles.title}>Trusted By</h1>
        <div>
          <LogoSlider logos={privateLogos} />
          <LogoSlider logos={publicLogos} />
        </div>
      </section>
      <div>
        <LogoSlider logos={badges} />
      </div>
      <Services />
    </div>
  );
}
