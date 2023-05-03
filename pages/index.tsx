import { useEffect, useState } from 'react';
import ComicCard from '../components/ComicCard/ComicCard';
import styles from '../components/layout.module.css';
import { wrap } from 'module';

const IMG_FANTASTIC = "portrait_fantastic";

type Comics = {
  id: number;
  title: string;
  issuseNumber: number;
  creators: object;
  characters: object;
  name: string;
  thumbnail: any;
  items: any;
};


let API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
    const [comics, setComics] = useState<Comics[]>([]);
    const [isLoading, setLoading] = useState(false)
  

    const fetchComics = async () => {
      let baseUrl = `${API_URL}:443/v1/public/comics`;
      
      let apiKey = process.env.NEXT_PUBLIC_API_KEY;
      let url = `${baseUrl}?limit=30&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setComics(data.data.results)
        console.log(data.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false)
      }
    };

    useEffect(() => {
      fetchComics()
    }, [])

    if (isLoading) {
      return <p>Loading...</p>;
    }

  return (
    <>
        <div style={{display: "flex", justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {comics.map((comic: any) => (
          <ComicCard
            title={comic.title}
            key={comic.id}
            id={comic.id}
            issueNumber={comic.issueNumber}
            creators={comic.creators.items.map((creator: any) => {
              return creator.name;
            })}
            thumbnail={`${comic.thumbnail.path}/${IMG_FANTASTIC}.${comic.thumbnail.extension}`}
            />
          ))}
        </div>
    </>
  );
}