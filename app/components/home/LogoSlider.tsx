'use client';
// Global imports
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

// Local imports
import styles from './LogoSlider.module.scss';

type Props = {
  logos: string[];
}

const emblaOptions: EmblaOptionsType = {
  loop: true,
  breakpoints: {
    '(max-width: 480px)': {
      slidesToScroll: 2,
    },
  }
};

const LogoSlider = ({ logos }: Props) => {
  const [emblaRef] = useEmblaCarousel(emblaOptions, [Autoplay()])
  return (
    <section className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {logos.map((logo, index) => (
            <div className={styles.slide} key={index}>
              <Image src={logo} alt={`Logo ${index + 1}`} height={160} width={170} className={styles.logo}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
