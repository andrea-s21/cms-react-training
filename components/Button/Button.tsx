import styles from '../Button/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

interface Comic {
  id: number;
  thumbnail: any;
  title: string;
  issueNumber: number;
}

interface ButtonProps {
  title: string;
  id: number;
  issueNumber: number;
  thumbnail: any;
  handleAddToFavorites: (newComic: Comic) => void;

}

export default function Button(props: ButtonProps) {
  const [isFavorite, setFavorite] = useState(false);


  const handleFavorite = () => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites: Comic[] = [];

    if (storedFavorites) {
      favorites = JSON.parse(storedFavorites);
    }

    const isComicFavorite = favorites.some((c) => c.id === props.id);

    if (isComicFavorite) {
      favorites = favorites.filter((c) => c.id !== props.id);
    } else {
      const comic: Comic = {
        id: props.id,
        thumbnail: props.thumbnail,
        title: props.title,
        issueNumber: props.issueNumber,
      };

      if (favorites.length >= 10) {
        // Limit reached, do not add the comic
        return;
      }

      favorites = [...favorites, comic];
    }
    console.log('udatedFavorites', favorites)
    setFavorite(!isComicFavorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleClick = () => {
    props.handleAddToFavorites(props);
    setFavorite(!isFavorite);
  };

  return (
    <button id={styles.button} className={isFavorite ? styles.buttonBolt : styles.buttonIcon} onClick={handleClick} >
      <FontAwesomeIcon
        icon={faBoltLightning}
      />
    </button>
  );
}