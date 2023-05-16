import { useState, useEffect } from 'react';

let API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useFetchComics = () => {
    const [comics, setComics] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
  
    const fetchComics = async () => {
      let baseUrl = `${API_URL}:443/v1/public/comics`;
      let apiKey = process.env.NEXT_PUBLIC_API_KEY;
      let url = `${baseUrl}?limit=30&ts=1&apikey=${apiKey}&hash=bd67ce0fc9068238c3aac6ea8ca58732`;
  
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
    }, []);
  
    return { comics, isLoading, isSuccess };
  };

  export {useFetchComics};