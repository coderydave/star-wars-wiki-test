/* eslint-disable react-hooks/exhaustive-deps */
//* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";

export const UseFilms = (urls: [string]) => {
  const [responseFilms, setResponseFilms] = useState<any>([]);
  const [errorFilms, setErrorFilms] = useState<any>("");
  const [loadingFilms, setLoadingFilms] = useState(true);

  const fetchData = async (url: string) => {
    try {
      const result = await axios.get(url);
      setResponseFilms((prev: any[]) => [...prev, result.data.title]);
    } catch (error) {
      setErrorFilms(error);
    } finally {
      setLoadingFilms(false);
    }
  };
  const data = () => {
    urls?.map(async (url: string) => await fetchData(url));
  };

  useEffect(() => {
    data();
  }, []);
  return { responseFilms, errorFilms, loadingFilms };
};

export default UseFilms;
