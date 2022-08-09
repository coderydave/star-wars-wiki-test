import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import UseSpecies from "../services/useSpecies";
import Loader from "../components/loader/Loader";
import Main from "../components/main/Main";
import UseSearch from "../services/useSearch";
import { IData } from "../models/spaciesList";
import lang from "../assets/lang/eng.json";
import { StyleSheet } from "../models/styleSheet";

const HomePage = () => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [renderedSpaciesList, setRenderedSpaciesList] = useState<[IData] | []>(
    []
  );
  const [renderedSearchList, setRenderedSearchList] = useState<
    [IData] | null | []
  >(null);

  const { responseSpacies, loadingSpacies } = UseSpecies();

  const { responseSearch, loadingSearch } = UseSearch(searchResult);

  useEffect(() => {
    if (!searchResult && responseSpacies) {
      setRenderedSpaciesList(responseSpacies.results);
    }
  }, [responseSpacies, searchResult]);

  useEffect(() => {
    if (responseSearch) {
      setRenderedSearchList(responseSearch.results);
    }
  }, [responseSearch]);

  const setSearch = useCallback((val: any) => {
    setSearchResult(val);
  }, []);

  const handlerNewSearch = () => {
    if (searchResult) {
      setSearchResult("");
      window.location.reload();
    }
  };
  return (
    <div>
      {(loadingSpacies || loadingSearch) === true ? (
        <Loader />
      ) : (
        <>
          {!searchResult && (
            <SearchBar setSearch={setSearch} getSearch={searchResult} />
          )}
          <Main
            renderedSpaciesList={renderedSpaciesList}
            renderedSearchList={renderedSearchList}
          />
          {searchResult && (
            <button style={styles.navButton} onClick={handlerNewSearch}>
              {lang.navbar.back}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;

const styles: StyleSheet = {
  navButton: {
    border: "1px solid gray",
    width: 130,
    color: "black",
    fontFamily: "Strjmono",
    margin: 4,
    fontSize: "0.8rem",
    background: "white",
    borderRadius: 3,
    boxShadow: "2px 2px 5px 1px #2E67F8",
    textDecoration: 0,
  },
};
