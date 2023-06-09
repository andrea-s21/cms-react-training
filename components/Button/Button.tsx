import React, { useState, useEffect } from 'react';
import styles from '../Button/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
  favorites: Comic[];
  handleAddToFavorites: (newComic: Comic) => void;
  handleRemoveFromFavorites: (comicId: number) => void;
}

export default function Button(props: ButtonProps) {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const isComicFavorite = props.favorites.some((c) => c.id === props.id);
    setFavorite(isComicFavorite);
  }, [props.favorites, props.id]);

  const handleFavorite = () => {
    if (isFavorite) {
      props.handleRemoveFromFavorites(props.id);
    } else {
      const comic: Comic = {
        id: props.id,
        thumbnail: props.thumbnail,
        title: props.title,
        issueNumber: props.issueNumber,
      };
      props.handleAddToFavorites(comic);
    }
  };

  const handleClick = () => {
    handleFavorite();
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <button id={styles.button} className={isFavorite ? styles.buttonBolt : styles.buttonIcon} onClick={handleClick} disabled={isFavorite || props.favorites.length >= 10}>
      <FontAwesomeIcon
        icon={isFavorite ? faBoltLightning : faBoltLightning}
      />
    </button>
  );
}