//* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";
import { SPECIES_URL } from "../assets/constants/urls";

export const UseSpecies = (url?: string) => {
  const [responseSpacies, setResponseSpacies] = useState<any>(undefined);
  const [errorSpacies, setErrorSpacies] = useState<any>("");
  const [loadingSpacies, setLoadingSpacies] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.get(url || SPECIES_URL);
      setResponseSpacies(result.data);
    } catch (error) {
      setErrorSpacies(error);
    } finally {
      setLoadingSpacies(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { responseSpacies, errorSpacies, loadingSpacies };
};

export default UseSpecies;
