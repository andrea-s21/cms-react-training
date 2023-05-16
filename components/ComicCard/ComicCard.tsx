import { useState, useEffect } from "react";
import styles from '../ComicCard/ComicCard.module.css'
import Button from '../Button/Button';
import Details from '../Details/Details';
import Image from 'next/image';

export default function ComicCard(props:{id: number, thumbnail: any, title: string, issueNumber: number, creators: any }) {
  const myLoader = ({ src }) => {
    return `${props.thumbnail}`
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
      {/* <img src={props.thumbnail} alt="thumbnail" />      */}
      <Button />
      <Details             
        title={props.title}
        key={props.id}
        id={props.id}
        issueNumber={props.issueNumber}
        creators={props.creators} 
        />
    </div>
  );
}