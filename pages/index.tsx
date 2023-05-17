import ComicCard from '../components/ComicCard/ComicCard';
import { useFetchComics } from '../lib/comics';

const IMG_FANTASTIC = "portrait_fantastic";

export default function Home() {
  const { comics, isLoading, isSuccess } = useFetchComics();

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isSuccess) {
      return <p>Failed to fetch comics.</p>;
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