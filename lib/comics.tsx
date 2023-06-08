import { useState, useEffect } from 'react';

let API_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface Comics {
  id: number;
  title: string;
  issuseNumber: number;
  creators: object;
  characters: object;
  name: string;
  thumbnail: any;
  items: any;
}

interface FetchComicsParams {
  characterFilter?: string;
  creatorFilter?: string;
}

interface FetchComicsResult {
  comics: Comics[];
  isLoading: boolean;
  isSuccess: boolean;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const useFetchComics = (params: FetchComicsParams = {}): FetchComicsResult => {
    const { characterFilter, creatorFilter} = params;
    const [comics, setComics] = useState<Comics[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  
    const fetchComics = async () => {
      let baseUrl = `${API_URL}:443/v1/public/comics`;
      let apiKey = process.env.NEXT_PUBLIC_API_KEY;
      let url = `${baseUrl}?limit=100&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732`;

      if (characterFilter) {
        url += `&characters=${characterFilter}`;
      }
  
      if (creatorFilter) {
        url += `&creators=${creatorFilter}`;
      }
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        setComics(data.data.results);
        setSuccess(true);
        console.log(data.data.results);
    } catch (err) {
        setSuccess(false);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchComics();
    }, [characterFilter, creatorFilter]);

    const setPage = (page: number) => {
      setCurrentPage(page);
    };

    return { comics, isLoading, isSuccess, currentPage, setPage };
  };

  export {useFetchComics};