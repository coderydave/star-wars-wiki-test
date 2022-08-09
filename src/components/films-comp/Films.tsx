import React from "react";
import { StyleSheet } from "../../models/styleSheet";
import UseFilms from "../../services/useFilms";
import Loader from "../loader/Loader";

interface Props {
  url: [string];
}

const FilmsComp = (props: Props) => {
  const { responseFilms, loadingFilms } = UseFilms(props.url);
  return (
    <div style={styles.container}>
      {loadingFilms ? (
        <Loader />
      ) : (
        <>
          <p style={styles.label}>Films</p>
          <div style={styles.films}>
            {responseFilms?.map((e: any, i: number) => (
              <p key={i} style={styles.value}>
                {e}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FilmsComp;

const styles: StyleSheet = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "5%",
    alignItems: "start",
  },
  films: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5%",
    width: 120,
    alignItems: "center",
    marginTop: 6,
  },
  label: {
    fontSize: "1.1rem",
    color: "black",
    fontWeight: 700,
    width: 140,
    textAlign: "start",
    marginTop: 8,
    textShadow: "0px 0px 4px #FFD700",
    marginLeft: -26,
  },
  value: {
    fontSize: "1.1rem",
    color: "white",
    fontWeight: 400,
    width: "60vw",
    maxWidth: 260,
    textAlign: "start",
    margin: 4,
    textShadow: "4px 5px 4px #2E67F8",
  },
};
