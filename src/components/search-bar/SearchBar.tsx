import React, { useState } from "react";
import { StyleSheet } from "../../models/styleSheet";
import lang from "../../assets/lang/eng.json";

const SearchBar = (props: { getSearch: any; setSearch: any }): any => {
  const { setSearch } = props;
  const [searchParam, setSearchParam] = useState("");

  const handleSubmit = async () => {
    if (searchParam.length > 1) {
      setSearch(searchParam);
    }
  };

  const handleSearch = (event: any) => {
    setSearchParam(event?.target.value);
  };
  const handleDelete = (event: any) => {
    setSearchParam("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <input
          placeholder={lang.searchbar.placeholder}
          type="search"
          onChange={handleSearch}
          value={searchParam}
          style={styles.searchInput}
        />
      </div>
      <button onClick={handleSubmit} style={styles.submitButton}>
        {lang.searchbar.button_text}
      </button>
      {searchParam.length > 1 && (
        <button onClick={handleDelete} style={styles.deleteButton}>
          x
        </button>
      )}
    </div>
  );
};

export default SearchBar;

const styles: StyleSheet = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: " 10px",
    marginTop: "6px",
    verticalAlign: "middle",
    color: "#fff",
    textAlign: "left",
    fontSize: "1.4em",
    letterSpacing: "0.05em",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
    alignContent: "center",
  },
  submitButton: {
    background: "white",
    color: "black",
    fontSize: 18,
    fontWeight: 600,
    borderRadius: 3,
    height: 37,
    borderLeft: 0,
    margin: "6px 0px 0px 10px",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
    border: "2px solid gray",
  },
  deleteButton: {
    background: "red",
    color: "black",
    fontSize: 18,
    fontWeight: 700,
    borderRadius: 3,
    height: 36,
    width: 36,
    margin: "6px 0px 0px 10px",
    border: "2px solid gray",
    marginLeft: 8,
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
  },
  searchInput: {
    width: "30vw",
    minWidth: 190,
    maxWidth: 280,
    height: 36,
    paddingLeft: 16,
    fontSize: 16,
    border: "2px solid gray",
    outlineOffset: "none",
  },
};
