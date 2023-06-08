import styles from "../Footer/Footer.module.css";
import Image from 'next/image';
import logo from "../../../src/assets/images/logo.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
      <Image
        priority
        src="/images/logo.svg"
        className={styles.logoFooter}
        width={106}
        height={106}
        alt=""
      />
      <span><p>Privacy Policy</p><p>Terms of Service</p></span>
      <p>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
      </div>
    </div>
  );
}