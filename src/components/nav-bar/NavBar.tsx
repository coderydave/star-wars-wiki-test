import { Link, useLocation } from "react-router-dom";
import { StyleSheet } from "../../models/styleSheet";
import lang from "../../assets/lang/eng.json";

const NavBar = () => {
  const location = useLocation();
  const currentPage = location.pathname.includes("profile")
    ? "Profile Page"
    : location.pathname.includes("spacies")
    ? "Species Page"
    : "HomePage";
  const currentPath = location.pathname;

  if (currentPath !== "/") {
    return (
      <div style={styles.navbar}>
        <h3 style={styles.title}>{currentPage}</h3>
        <Link to="/" style={styles.navButton}>
          {lang.navbar.back}
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
};

export default NavBar;

const styles: StyleSheet = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#00000078",
    margin: 0,
  },
  navButton: {
    border: "1px solid gray",
    width: 120,
    fontFamily: "Strjmono",
    color: "black",
    margin: 4,
    fontSize: "0.8rem",
    background: "white",
    borderRadius: 3,
    boxShadow: "2px 2px 5px 1px #2E67F8",

    textDecoration: 0,
  },
  title: {
    color: "white",
    fontFamily: "Strjmono",
    margin: 8,
    textShadow: "4px 3px 4px #FFD700",
    fontSize: "1.2rem",
  },
};
