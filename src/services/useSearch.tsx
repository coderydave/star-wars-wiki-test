//* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";
import { NAMES_URL } from "../assets/constants/urls";

export const UseSearch = (params: string) => {
  const [responseSearch, setResponseSearch] = useState<any>(undefined);
  const [errorSearch, setErrorSearch] = useState<any>("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const searchText = params;

  const fetchData = async (searchText: string) => {
    try {
      setLoadingSearch(true);
      const result = await axios.get(`${NAMES_URL}/?search=${searchText}`);
      setResponseSearch(result.data);
    } catch (error) {
      setErrorSearch(error);
    } finally {
      setLoadingSearch(false);
    }
  };

  useEffect(() => {
    if (searchText.length < 1) {
      return;
    } else {
      fetchData(searchText);
    }
  }, [searchText.length, searchText]);

  return { responseSearch, errorSearch, loadingSearch };
};

export default UseSearch;
