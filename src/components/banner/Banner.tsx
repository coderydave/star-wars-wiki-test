import React from "react";
import { StyleSheet } from "../../../src/models/styleSheet";
import starWarsLogo from "../../../src/assets/img/star-wars-logo.png";
import lang from "../../../src/assets/lang/eng.json";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner" style={styles.banner}>
      <img src={starWarsLogo} className="App-logo" alt="Star Wars Logo" />
      <h1 style={styles.bannerTitle}>{lang.homepage.title}</h1>
      <img src={starWarsLogo} className="App-logo" alt="Star Wars Logo" />
    </div>
  );
};

export default Banner;

const styles: StyleSheet = {
  banner: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
  },
  bannerTitle: {
    margin: "10px 10px 0px 10px",
    borderRadius: 3,
    textShadow: "3px 2px 1px rgba(255,255,255,0.35)",
  },
  homePageTitle: {},
};
