import React, { useState, useEffect } from "react";
import styles from '../FilterBar/FilterBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function FilterBar(props:{ 
  setCharacterFilter: any, 
  setCreatorFilter: any, 
  handleCharacterFilterChange: any, 
  handleCreatorFilterChange: any
}) {
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
      <>
        {isSmallScreen && (
          <>
     <button className={styles.filterButton} onClick={handleMenuToggle}>
        Filter
        <FontAwesomeIcon icon={faFilter} />
      </button>
            </>
        )}
          <div className={`${styles.filterBar} ${isSmallScreen ? (isMenuOpen ? styles.menuOpen : "") : ""}`}>
            <select onChange={(e) => props.handleCharacterFilterChange(e.target.value)}>
              <option value="">All Characters</option>
              <option value="1009368">Iron Man</option>
              <option value="1009220">Captain America</option>
              <option value="1009664">Thor</option>
              <option value="1009268">Deadpool</option>
              <option value="1009562">Scarlet Witch</option>
              <option value="1009189">Black Widow</option>
              <option value="1009707">Wasp</option>
              <option value="1010763">Gamora</option>
            </select>
            <select onChange={(e) => props.handleCreatorFilterChange(e.target.value)}>
              <option value="">All Creators</option>
              <option value="12787">Kate Leth</option>
              <option value="24">Brian Michael Bendis</option>
              <option value="30">Stan Lee</option>
              <option value="32">Steve Ditko</option>
              <option value="196">Jack Kirby</option>
            </select>
        </div>
        </>
      );
  }
