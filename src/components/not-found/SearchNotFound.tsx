import React from "react";
import { StyleSheet } from "../../models/styleSheet";
import lang from "../../assets/lang/eng.json";
const SearchNotFound = () => {
  return <h1 style={styles.text}>{lang.searchbar.nofound}</h1>;
};

export default SearchNotFound;

const styles: StyleSheet = {
  text: {
    textShadow: "5px 4px 5px #2E67F8",
    color: "white",
    margin: 8,
    fontFamily: "Strjmono",
    fontSize: "1.4rem",
  },
};
