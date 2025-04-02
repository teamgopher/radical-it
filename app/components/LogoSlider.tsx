"use client";
import React from 'react';
import Image from 'next/image';
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './LogoSlider.module.css';

type Props = {
  logos: string[];
}

const LogoSlider = ({ logos }: Props) => {
  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (
    <Slider
      {...settings}
      className={styles.slider}
      
      
    >
        {logos.map((logo, index) => (
          <div key={index} className={styles.logo}>
            <Image src={logo} alt={`Logo ${index + 1}`} fill objectFit="contain" />
          </div>
        ))}
  </Slider>
  );
};

export default LogoSlider;
