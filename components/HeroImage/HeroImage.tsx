import Image from 'next/image';
import styles from '../HeroImage/HeroImage.module.css';

export default function HeroImage() {
  return (
    <>
      <Image
      priority
      src="/images/hero-photo.png"
      className={styles.heroImage}
      width={1840}
      height={950}
      alt=""
    />
      <Image
      priority
      src="/images/halftone@2x.png"
      className={styles.halftoneImage}
      width={375}
      height={92}
      alt=""
    />
    </>
  );
}