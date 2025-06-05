import HomeHero from './components/home/HomeHero';
import LogoSlider from './components/home/LogoSlider';
import QuoteSection from './components/home/QuoteSection';
import Services from './components/home/Services';
import { privateLogos, publicLogos, badges } from './config/logos';
import { quotes } from './config/quotes';
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div>

      <HomeHero />
      <section className={styles.trustedPartners}>
        <h1 className={styles.title}>Trusted By</h1>
        <div>
          <LogoSlider logos={privateLogos} />
          <LogoSlider logos={publicLogos} />
        </div>
      </section>
      <QuoteSection quote={quotes.vikki} />
      <div>
        <LogoSlider logos={badges} />
      </div>
      <QuoteSection quote={quotes.guy} />
      <Services />
    </div>
  );
}
