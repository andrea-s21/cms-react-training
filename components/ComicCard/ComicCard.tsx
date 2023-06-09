import { useState, useEffect } from "react";
import styles from '../ComicCard/ComicCard.module.css'
import Button from '../Button/Button';
import Details from '../Details/Details';
import Image from 'next/image';


interface Comic {
  id: number;
  thumbnail: any;
  title: string;
  issueNumber: number;
}
interface ComicCardProps {
  id: number;
  thumbnail: any;
  title: string;
  issueNumber: number;
  creators: any;
  favoriteComics: Comic[];
  handleAddToFavorites: (newComic: Comic) => void;
  handleRemoveFromFavorites: (comicId: number) => void;
}

export default function ComicCard(props: ComicCardProps) {
  const myLoader = ({ src, width, quality }) => {
    return `${props.thumbnail}?w=${width}&q=${quality || 75}`;
  }


  return (
    <div className={styles.comicCard}> 
      <Image
        priority
        loader={myLoader}
        src={props.thumbnail}
        className={styles.comicImage}
        width={300}
        height={600}
        alt="thumbnail"
      />  
      <Button 
        title={props.title}
        id={props.id}
        issueNumber={props.issueNumber}
        thumbnail={props.thumbnail}
        handleAddToFavorites={props.handleAddToFavorites}
        handleRemoveFromFavorites={props.handleRemoveFromFavorites}
        favorites={props.favoriteComics}
      />
      <Details             
        title={props.title}
        issueNumber={props.issueNumber}
        creators={props.creators} 
        />
    </div>
  );
}