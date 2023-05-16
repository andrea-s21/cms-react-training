import Image from 'next/image';
import styles from '../HeroImage/HeroImage.module.css';

export default function HeroImage() {
  return (
    // <>
      <Image
      priority
      src="/images/hero-photo.png"
      className={styles.heroImage}
      width={1440}
      height={646}
      alt=""
    />
    // </>
    // <div className="hero-image">
    //   <h1 className="title">COMIC CLOSET</h1>
    //   <img className="logo-hero" src={logo} alt="Hero" />
    //   <img className="hero-photo" src={heroPhoto} alt="Hero" />
    //   <img className="halftone" src={halfTone} alt="Hero" />
    // </div>
  );
}