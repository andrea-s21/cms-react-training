import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
  favoritesCount: number;
}

export default function NavBar({ favoritesCount }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1025);
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <Image
        priority
        src="/images/logo.svg"
        className={styles.logo}
        width={375}
        height={450}
        alt=""
      />
      {isSmallScreen && (
        <div className={styles.headerRight}>
          <div className={styles.listItemBolt}>{favoritesCount > 0 && <p className={styles.count}>({favoritesCount})</p>}
            <FontAwesomeIcon
              className={styles.bolt}
              icon={faBoltLightning}
            />
          </div>
          <div className={styles.hamburger} onClick={handleMenuToggle}>
            <FontAwesomeIcon
              className={`${styles.bar} ${isMenuOpen && styles.active}`}
              icon={faBars}
            />
          </div>
        </div>
      )}
      <ul className={`${styles.navItems} ${isSmallScreen ? (isMenuOpen ? styles.open : styles.close) : ""}`}>
        <li className={styles.listItems}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItems}>Shop</li>
        <span>
          <FontAwesomeIcon
            className={styles.bolt}
            icon={faBoltLightning}
          />
          <li className={styles.listItems}> My Favorites {favoritesCount > 0 && <span className={styles.count}>({favoritesCount})</span>}
          </li>
        </span>
      </ul>
    </nav>
  );
}


