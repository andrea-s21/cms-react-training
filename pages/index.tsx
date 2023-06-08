import { useState } from 'react';
import { useFetchComics } from '../lib/comics';
import styles from '../components/layout.module.css';
import ComicCard from '../components/ComicCard/ComicCard';
import FilterBar from '../components/FilterBar/FilterBar';
import Pagination from '../components/Pagination/Pagination';
import Favorites from '../components/Favorites/Favorites';
import NavBar from "../components/NavBar/NavBar";
import HeroImage from '../components/HeroImage/HeroImage';
import Footer from '../components/Footer/Footer';


const IMG_FANTASTIC = "portrait_fantastic";

interface Comic {
  id: number;
  thumbnail: any;
  title: string;
  issueNumber: number;
}

export default function Home() {
  const [characterFilter, setCharacterFilter] = useState<string | undefined>(undefined);
  const [creatorFilter, setCreatorFilter] = useState<string | undefined>(undefined);
  const [favorites, setFavorites] = useState<Comic[]>([]);
  const { comics, isLoading, isSuccess, currentPage, setPage } = useFetchComics({ characterFilter, creatorFilter});
  const maxDisplay = 15; 

  const handleCharacterFilterChange = (characterId: string) => {
    setCharacterFilter(characterId);
  };

  const handleCreatorFilterChange = (creatorId: string) => {
    setCreatorFilter(creatorId);
  };

  const handleAddToFavorites = (newComic: Comic) => {
    if (favorites.length >= 10) {
      return; // Limit reached, do not add the new comic
    }
    setFavorites((prevFavorites: Comic[]) => [...prevFavorites, newComic]);
    localStorage.setItem("favorites", JSON.stringify([...favorites, newComic]));
    console.log('added')
    console.log(favorites, 'favs')
  };

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * maxDisplay;
  const endIndex = startIndex + maxDisplay;

  const renderedComics = comics.slice(startIndex, endIndex);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // if (!isSuccess) {
  //   return <p>Failed to fetch comics.</p>;
  // }

  return (
    <>
        <header className={styles.header}>
          <NavBar favoritesCount={favorites.length} />
          <HeroImage />
        </header>
        <div className={styles.textbox}>
          <h2 className={styles.subtitle}>New Comics!</h2>
          <h1 className={styles.title}>Coming Out Daily</h1>
          <p className={styles.description}>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </div>
        <div className={styles.mainContent}>
          <FilterBar  setCharacterFilter={setCharacterFilter} setCreatorFilter={setCreatorFilter} handleCharacterFilterChange={handleCharacterFilterChange} handleCreatorFilterChange={handleCreatorFilterChange}/>
          <Favorites favoriteComics={favorites} setFavoriteComics={setFavorites}  />
        <div className={styles.comicContainer}>
        {renderedComics.map((comic: any) => (
          <ComicCard
            title={comic.title}
            key={comic.id}
            id={comic.id}
            issueNumber={comic.issueNumber}
            creators={comic.creators.items.map((creator: any) => {
              return creator.name;
            })}
            thumbnail={`${comic.thumbnail.path}/${IMG_FANTASTIC}.${comic.thumbnail.extension}`}
            handleAddToFavorites={handleAddToFavorites}
            favoriteComics={favorites}
            />
          ))}
        </div>
        </div>
        <Pagination comics={comics} currentPage={currentPage} onPageChange={setPage} />
        <Footer />
    </>
  );
}