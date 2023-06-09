import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { ImageLoaderProps } from 'next/image';
import styles from '../Favorites/Favorites.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


interface Comic {
  id: number;
  thumbnail: any;
  title: string;
  issueNumber: number;
}

interface FavoritesProps {
  favoriteComics: Comic[];
  setFavoriteComics: (comics: Comic[]) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favoriteComics, setFavoriteComics }) => {
  const [localFavorites, setLocalFavorites] = useState<Comic[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const myLoader = ({ src, width, quality }: ImageLoaderProps, comic: Comic) => {
    return `${comic.thumbnail}?w=${width}&q=${quality || 75}`;
  }

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

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setLocalFavorites(favorites);
    }

    return () => {
      // Synchronize favoriteComics state when component unmounts
      setFavoriteComics(localFavorites);
    };
  }, []);

  const handleRemoveFavorite = (comicId: number) => {
    const updatedFavorites = favoriteComics.filter((comic) => comic.id !== comicId);
    setFavoriteComics(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (

    <>
      {isSmallScreen && (
        <>
          <div className={styles.favoritesContiner}>
            <button className={styles.favoritesButton} onClick={handleMenuToggle}>
              {isMenuOpen ? "Hide Favorites" : "Show Favorites"}
              <FontAwesomeIcon
                icon={faBoltLightning}
              />
            </button>
          </div>
        </>
      )}
      <div className={`${styles.favoritesButtonDesktop} ${isSmallScreen ? (isMenuOpen ? styles.menuOpen : "") : ""}`}>
        <div>
          <h2>Favorites</h2>
          {favoriteComics.length === 0 ? (
            <p>No favorites yet.</p>
          ) : (
            <ul>
              {favoriteComics.map((comic) => (
                <li key={comic.id}>
                  <div className={styles.content}>
                    <p className={styles.title}>{comic.title}</p>
                    <p>Issue: {comic.issueNumber}</p>
                  </div>
                  <Image
                    priority
                    loader={(props: ImageLoaderProps) => myLoader(props, comic)}
                    src={comic.thumbnail}
                    className={styles.comicImage}
                    width={50}
                    height={75}
                    alt="thumbnail"
                  />
                  <button className={styles.removeButton}
                    onClick={() => handleRemoveFavorite(comic.id)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button className={styles.favoritesButtonHide} onClick={handleMenuToggle}>
            {isMenuOpen ? "Hide Favorites" : ""}
            <FontAwesomeIcon
              icon={faBoltLightning}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Favorites;
